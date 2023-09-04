import { Types } from 'mongoose';

export class UpdateSizeDto {
  readonly name?: string;
  readonly quantity?: number;
  readonly color?: Types.ObjectId;
  readonly product?: Types.ObjectId;
}
