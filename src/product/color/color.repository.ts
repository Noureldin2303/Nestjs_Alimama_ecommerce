import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Color, ColorDocument } from './schema/color.schema';
import { SizeService } from '../size/size.service';
import { CreateColorDto } from './dto/create-color.dto';
import { StoreColorDto } from './dto/store-color.dto';
import { CreateSizeDto } from '../size/dto/create-size.dto';
import { UpdateColorDto } from './dto/update-color.dto';

@Injectable()
export class ColorRepository {
  constructor(
    @InjectModel(Color.name) private readonly colorModel: Model<ColorDocument>,
    private readonly sizeService: SizeService,
  ) {}

  async create(color: CreateColorDto, product: string): Promise<Color> {
    const createdColor = new this.colorModel(color);
    await createdColor.save();

    const createdSizes = await Promise.all(
      color.sizes.map(async (size: CreateSizeDto) => {
        return await this.sizeService.create(size, createdColor._id, product);
      }),
    );

    const newColor: StoreColorDto = {
      ...color,
      product: new Types.ObjectId(product),
      sizes: createdSizes.map((size) => size._id),
    };
    const updatedColor = await this.colorModel.findOneAndUpdate(
      createdColor._id,
      newColor,
      { new: true },
    );
    return updatedColor;
  }

  async findAll(): Promise<Color[]> {
    return this.colorModel.find().exec();
  }

  async findById(id: string): Promise<Color> {
    const color = await this.colorModel
      .find({ _id: new Types.ObjectId(id) })
      .exec();
    return color[0];
  }

  async findByProduct(id: string): Promise<Color[]> {
    const colors = await this.colorModel
      .find({ product: new Types.ObjectId(id) })
      .exec();
    return colors;
  }

  async findByName(name: string, id: string): Promise<Color[]> {
    const colors = await this.colorModel
      .find({ name, product: new Types.ObjectId(id) })
      .exec();
    return colors;
  }

  async update(id: string, color: UpdateColorDto): Promise<Color> {
    const updatedColor = await this.colorModel.findOneAndUpdate(
      { _id: new Types.ObjectId(id) },
      color,
      { new: true },
    );
    return updatedColor;
  }

  async deleteByProduct(productId: string): Promise<void> {
    const colors = await this.colorModel
      .find({ product: new Types.ObjectId(productId) })
      .exec();

    await Promise.all(
      colors.map(async (color) => {
        await this.sizeService.deleteByColor(color._id);
      }),
    ).then(async () => {
      await this.colorModel
        .find({ product: new Types.ObjectId(productId) })
        .deleteMany();
    });
  }

  async delete(id: string): Promise<Color> {
    await this.sizeService.deleteByColor(id);
    const deletedColor = await this.colorModel
      .findOneAndDelete({ _id: new Types.ObjectId(id) })
      .exec();

    return deletedColor;
  }
}
