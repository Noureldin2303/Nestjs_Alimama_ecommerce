import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { Customer, CustomerDocument } from './schema/customer.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UserService } from '../user.service';
import { Address, AddressDocument } from './schema/address.schema';
import { CreditCard, CreditCardDocument } from './schema/creditCard-schema';
import { Sizes, SizesDocument } from './schema/sizes.schema';
import { StoreCustomerDto } from './dto/store-customer.dto';
import { Role } from '../enums/role.enum';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectModel(Address.name)
    private readonly addressesModel: Model<AddressDocument>,
    @InjectModel(CreditCard.name)
    private readonly creditCardModel: Model<CreditCardDocument>,
    @InjectModel(Sizes.name)
    private readonly sizesModel: Model<SizesDocument>,
    @InjectModel(Customer.name)
    private readonly customerModel: Model<CustomerDocument>,
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
  ) {}

  async register(
    createCustomerDto: CreateCustomerDto,
  ): Promise<Customer | { message: string }> {
    const customer = new this.customerModel(createCustomerDto);
    await customer.save();

    const hashedPassword = await bcrypt.hash(createCustomerDto.password, 10);
    const resulthashedPassword = bcrypt.compare(
      createCustomerDto.password,
      hashedPassword,
    );

    if (!resulthashedPassword) {
      return {
        message: 'Failed to sign up',
      };
    }

    const hashedRole = await bcrypt.hash(Role.Customer, 10);
    const resulthashedRole = bcrypt.compare(Role.Customer, hashedRole);

    if (!resulthashedRole) {
      return {
        message: 'Failed to sign up',
      };
    }

    const user = {
      _id: customer._id,
      firstName: createCustomerDto.firstName,
      lastName: createCustomerDto.lastName,
      email: createCustomerDto.email,
      password: hashedPassword,
      phone: createCustomerDto.phone,
      role: hashedRole,
    };

    await this.userService.create(user);

    const storedAddresses = await Promise.all([
      ...createCustomerDto.address.map((address) => {
        return this.addressesModel.create({
          ...address,
          customer: customer._id,
        });
      }),
    ]);

    const storedCreditCards = await Promise.all([
      ...createCustomerDto.creditCard.map((creditCard) => {
        return this.creditCardModel.create({
          ...creditCard,
          customer: customer._id,
        });
      }),
    ]);

    const storedSizes = await this.sizesModel.create({
      ...createCustomerDto.sizes,
      customer: customer._id,
    });

    const storeCustomer: StoreCustomerDto = {
      ...createCustomerDto,
      address: storedAddresses.map((address) => address._id),
      creditCard: storedCreditCards.map((creditCard) => creditCard._id),
      sizes: storedSizes._id,
      password: hashedPassword,
    };

    const updatedCustomer = await this.customerModel.findOneAndUpdate(
      customer._id,
      storeCustomer,
      {
        new: true,
      },
    );

    delete updatedCustomer.password;

    return updatedCustomer;
  }

  async findByEmail(email: string): Promise<Customer> {
    const customer = await this.customerModel
      .findOne({ email })
      .populate('email')
      .exec();

    return customer;
  }

  async findById(id: string): Promise<Customer> {
    const customer = await this.customerModel
      .findOne({
        _id: new Types.ObjectId(id),
      })
      .populate('address sizes creditCard')
      .exec();

    if (!customer) {
      return null;
    }

    return customer;
  }
}
