import { Types } from 'mongoose';

export class CreateAddressDto {
  readonly customer?: Types.ObjectId;
  readonly addressLine: string;
  readonly city: string;
  readonly country: string;
}
