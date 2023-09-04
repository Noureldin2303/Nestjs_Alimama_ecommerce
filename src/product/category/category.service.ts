import { Injectable } from '@nestjs/common';
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
    return this.categoryRepository.findById(id);
  }

  async findByName(name: string) {
    return this.categoryRepository.findByName(name);
  }

  async create(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepository.create(createCategoryDto);
  }

  async update(id: string, category: UpdateCategoryDto) {
    return this.categoryRepository.update(id, category);
  }

  async delete(id: string) {
    return this.categoryRepository.delete(id);
  }
}
