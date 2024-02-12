import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { CreateAddressDto } from './create-address.dto';
import { CreateCreditCardDto } from './create-creditcard.dto';
import { CreateSizesDto } from './create-sizes.dto';

export class CreateCustomerDto extends CreateUserDto {
  readonly gender: string;
  readonly birthDate: string;
  readonly avatar?: string;
  readonly provaImg?: string;
  readonly role: string;
  readonly active: boolean;
  readonly address?: [CreateAddressDto];
  readonly sizes?: CreateSizesDto;
  readonly creditCard?: [CreateCreditCardDto];
  // readonly reviews: [CreateReviewDto];
  // readonly wisklist: CreateWishlistDto;
  // readonly cart: CreateCartDto;
  // readonly orders: CreateOrdersDto;
}
