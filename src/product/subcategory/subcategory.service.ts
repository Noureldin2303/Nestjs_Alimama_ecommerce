import { Injectable } from '@nestjs/common';
import { CreateSubCategoryDto } from './dto/create-subcategory.dto';
import { SubCategory } from './schema/subcategory.schema';
import { SubCategoryRepository } from './subcategory.repository';
import { Types } from 'mongoose';

@Injectable()
export class SubcategoryService {
  constructor(private readonly subCategoryRepository: SubCategoryRepository) {}

  async findAll(): Promise<SubCategory[]> {
    return await this.subCategoryRepository.findAll();
  }

  async findById(id: string): Promise<SubCategory> {
    return await this.subCategoryRepository.findById(id);
  }

  async create(
    subCategory: CreateSubCategoryDto,
    category: Types.ObjectId,
  ): Promise<SubCategory> {
    return await this.subCategoryRepository.create(subCategory, category);
  }
}
