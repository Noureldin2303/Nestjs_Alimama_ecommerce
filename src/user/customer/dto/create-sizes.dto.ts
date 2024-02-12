import { Types } from 'mongoose';

export class CreateSizesDto {
  readonly customer?: Types.ObjectId;
  readonly shouder: number;
  readonly chest: number;
  readonly waist: number;
  readonly leftArm: number;
  readonly rightArm: number;
  readonly leftLeg: number;
  readonly rightLeg: number;
  readonly torse: number;
  readonly height: number;
}
