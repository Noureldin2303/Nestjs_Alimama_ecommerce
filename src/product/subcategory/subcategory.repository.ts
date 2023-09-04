import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SubCategory, SubCategoryDocument } from './schema/subcategory.schema';
import { Model, Types } from 'mongoose';
import { CreateSubCategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubCategoryDto } from './dto/update-subcategory.dto';
import { CategoryService } from '../category/category.service';
import { StoreSubCategoryDto } from './dto/store-subcategory.dto';

@Injectable()
export class SubCategoryRepository {
  constructor(
    @InjectModel(SubCategory.name)
    private subCategoryModel: Model<SubCategoryDocument>,
    private readonly categoryService: CategoryService,
  ) {}

  async findAll(): Promise<SubCategory[]> {
    return this.subCategoryModel.find().exec();
  }

  async findById(id: string): Promise<SubCategory> {
    const subcategory = await this.subCategoryModel
      .find({ _id: new Types.ObjectId(id) })
      .exec();
    return subcategory[0];
  }

  async findByName(name: string, category: string): Promise<SubCategory> {
    const categoryDoc = await this.categoryService.findByName(category);
    const subcategory = await this.subCategoryModel
      .find({ name, category: categoryDoc._id })
      .exec();
    return subcategory[0];
  }

  async create(createSubCategory: CreateSubCategoryDto): Promise<SubCategory> {
    const categoryDoc = await this.categoryService.findByName(
      createSubCategory.category,
    );

    const newSubCategory: StoreSubCategoryDto = {
      ...createSubCategory,
      category: categoryDoc._id,
    };

    const subCategory = new this.subCategoryModel(newSubCategory);
    return await subCategory.save();
  }

  async update(
    id: string,
    subCategory: UpdateSubCategoryDto,
  ): Promise<SubCategory> {
    return this.subCategoryModel
      .findOneAndUpdate({ _id: new Types.ObjectId(id) }, subCategory)
      .exec();
  }

  async delete(id: string): Promise<SubCategory> {
    return this.subCategoryModel
      .findOneAndDelete({ _id: new Types.ObjectId(id) })
      .exec();
  }
}
