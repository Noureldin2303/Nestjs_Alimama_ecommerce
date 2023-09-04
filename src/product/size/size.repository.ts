import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Size, SizeDocument } from './schema/size.schema';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';

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

  async findAll(): Promise<Size[]> {
    return await this.sizeModel.find().exec();
  }

  async findById(id: string): Promise<Size> {
    const size = await this.sizeModel
      .find({ _id: new Types.ObjectId(id) })
      .exec();
    return size[0];
  }

  async findByColor(id: string): Promise<Size[]> {
    const sizes = await this.sizeModel
      .find({ color: new Types.ObjectId(id) })
      .exec();
    return sizes;
  }

  async findByName(name: string): Promise<Size[]> {
    const sizes = await this.sizeModel.find({ name }).exec();
    return sizes;
  }

  async update(id: string, size: UpdateSizeDto): Promise<Size> {
    const updatedSize = await this.sizeModel.findOneAndUpdate(
      { _id: new Types.ObjectId(id) },
      size,
      { new: true },
    );
    return updatedSize;
  }

  async deleteByColor(id: string): Promise<Size[]> {
    const deletedSizes = await this.sizeModel
      .find({ color: new Types.ObjectId(id) })
      .deleteMany();
    return deletedSizes;
  }

  async delete(id: string): Promise<Size> {
    const deletedSize = await this.sizeModel.findOneAndDelete({
      _id: new Types.ObjectId(id),
    });
    return deletedSize;
  }
}
