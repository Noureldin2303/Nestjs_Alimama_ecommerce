import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { Category } from './schema/category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.findAll();
  }

  async findById(id: string): Promise<Category> {
    return this.categoryRepository.findById(id);
  }

  async create(category: CreateCategoryDto): Promise<Category> {
    return this.categoryRepository.create(category);
  }
}
