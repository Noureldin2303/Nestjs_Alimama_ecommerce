import { Injectable } from '@nestjs/common';
import { CustomerRepository } from './customer.repository';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async register(createCustomerDto: CreateCustomerDto) {
    const user = await this.customerRepository.findByEmail(
      createCustomerDto.email,
    );

    if (user) {
      return {
        message: 'Email already exists',
      };
    }

    return this.customerRepository.register(createCustomerDto);
  }

  async findById(id: string) {
    return this.customerRepository.findById(id);
  }

  async findByEmail(email: string) {
    return this.customerRepository.findByEmail(email);
  }
}
