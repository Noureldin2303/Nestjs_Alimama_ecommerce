import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SubCategory, SubCategoryDocument } from './schema/subcategory.schema';
import { Model, Types } from 'mongoose';
import { CreateSubCategoryDto } from './dto/create-subcategory.dto';

@Injectable()
export class SubCategoryRepository {
  constructor(
    @InjectModel(SubCategory.name)
    private subCategoryModel: Model<SubCategoryDocument>,
  ) {}

  async findAll(): Promise<SubCategory[]> {
    return this.subCategoryModel.find().exec();
  }

  async findById(id: string): Promise<SubCategory> {
    return this.subCategoryModel.findById(id).exec();
  }

  async create(
    subCategory: CreateSubCategoryDto,
    category: Types.ObjectId,
  ): Promise<SubCategory> {
    const newSubCategory = new this.subCategoryModel({
      ...subCategory,
      category,
    });

    return newSubCategory.save();
  }
}
