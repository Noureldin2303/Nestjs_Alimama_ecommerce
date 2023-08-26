import { Types } from 'mongoose';

export class CreateSizeDto {
  readonly name: string;
  readonly quantity: number;
  readonly color: Types.ObjectId;
  readonly product: Types.ObjectId;
}
