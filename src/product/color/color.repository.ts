import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Color, ColorDocument } from './schema/color.schema';
import { SizeService } from '../size/size.service';
import { CreateColorDto } from './dto/create-color.dto';
import { StoreColorDto } from './dto/store-color.dto';
import { CreateSizeDto } from '../size/dto/create-size.dto';

@Injectable()
export class ColorRepository {
  constructor(
    @InjectModel(Color.name) private readonly colorModel: Model<ColorDocument>,
    private readonly sizeService: SizeService,
  ) {}

  async create(color: CreateColorDto, product: Types.ObjectId): Promise<Color> {
    // const createdSizes = await Promise.all(
    //   color.sizes.map(async (size: CreateSizeDto) => {
    //     return await this.sizeService.create(size);
    //   }),
    // );

    // const storeColor: StoreColorDto = {
    //   ...color,
    //   product,
    //   sizes: createdSizes.map((size) => size._id),
    // };
    // const createdColor = new this.colorModel(storeColor);
    // return await createdColor.save();

    const createdColor = new this.colorModel(color);
    await createdColor.save();

    const createdSizes = await Promise.all(
      color.sizes.map(async (size: CreateSizeDto) => {
        return await this.sizeService.create(size, createdColor._id, product);
      }),
    );

    const newColor: StoreColorDto = {
      ...color,
      product,
      sizes: createdSizes.map((size) => size._id),
    };
    const updatedProduct = await this.colorModel.findByIdAndUpdate(
      createdColor._id,
      newColor,
      { new: true },
    );
    return updatedProduct;
  }
}
