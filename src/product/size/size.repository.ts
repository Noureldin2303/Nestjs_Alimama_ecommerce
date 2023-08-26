import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Size, SizeDocument } from './schema/size.schema';
import { CreateSizeDto } from './dto/create-size.dto';

@Injectable()
export class SizeRepository {
  constructor(@InjectModel(Size.name) private sizeModel: Model<SizeDocument>) {}

  async create(
    size: CreateSizeDto,
    color: Types.ObjectId,
    product: Types.ObjectId,
  ): Promise<Size> {
    const createdSize = new this.sizeModel({
      ...size,
      color,
      product,
    });
    return await createdSize.save();
  }
}
