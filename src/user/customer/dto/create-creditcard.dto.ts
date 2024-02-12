import { Types } from 'mongoose';

export class CreateCreditCardDto {
  readonly customer?: Types.ObjectId;
  readonly cardNumber: string;
  readonly cvv: number;
  readonly expiryDate: string;
}
