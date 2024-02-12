import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { CustomerRepository } from './customer.repository';
import { CustomerSchema } from './schema/customer.schema';
import { UserModule } from '../user.module';
import { AddressSchema } from './schema/address.schema';
import { CreditCardSchema } from './schema/creditCard-schema';
import { SizesSchema } from './schema/sizes.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Customer', schema: CustomerSchema },
      { name: 'Address', schema: AddressSchema },
      { name: 'CreditCard', schema: CreditCardSchema },
      { name: 'Sizes', schema: SizesSchema },
    ]),
    forwardRef(() => UserModule),
    JwtModule,
  ],
  controllers: [CustomerController],
  providers: [CustomerService, CustomerRepository],
  exports: [CustomerService],
})
export class CustomerModule {}
