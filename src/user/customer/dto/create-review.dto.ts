import { Types } from 'mongoose';

export class CreateReviewDto {
  readonly customer: Types.ObjectId;
  readonly product: Types.ObjectId;
  readonly comment: string;
  readonly rating: number;
}
