import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Category, CategoryDocument } from './schema/category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async findById(id: string): Promise<Category> {
    const category = await this.categoryModel
      .find({ _id: new Types.ObjectId(id) })
      .exec();
    return category[0];
  }

  async findByName(name: string): Promise<Category> {
    return this.categoryModel.findOne({ name }).exec();
  }

  async create(category: CreateCategoryDto): Promise<Category> {
    const createdCategory = new this.categoryModel(category);
    return createdCategory.save();
  }

  async update(id: string, category: UpdateCategoryDto): Promise<Category> {
    const newCategory = await this.categoryModel
      .findOneAndUpdate({ _id: new Types.ObjectId(id) }, category)
      .exec();
    return newCategory;
  }

  async delete(id: string): Promise<void> {
    await this.categoryModel
      .findOneAndDelete({ _id: new Types.ObjectId(id) })
      .exec();
  }
}
