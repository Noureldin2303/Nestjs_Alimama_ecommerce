import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async findAll() {
    return this.categoryRepository.findAll();
  }

  async findById(id: string) {
    const category = await this.categoryRepository.findById(id);
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return category;
  }

  async findByName(name: string) {
    return this.categoryRepository.findByName(name);
  }

  async create(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepository.create(createCategoryDto);
  }

  async update(id: string, category: UpdateCategoryDto) {
    const categoryExists = await this.categoryRepository.findById(id);
    if (!categoryExists) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return this.categoryRepository.update(id, category);
  }

  async delete(id: string) {
    const category = await this.categoryRepository.findById(id);
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return this.categoryRepository.delete(id);
  }
}
