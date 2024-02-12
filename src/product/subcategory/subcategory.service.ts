import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubCategoryDto } from './dto/create-subcategory.dto';
import { SubCategoryRepository } from './subcategory.repository';
import { UpdateSubCategoryDto } from './dto/update-subcategory.dto';

@Injectable()
export class SubcategoryService {
  constructor(private readonly subCategoryRepository: SubCategoryRepository) {}

  async findAll() {
    return await this.subCategoryRepository.findAll();
  }

  async findById(id: string) {
    const subCategory = await this.subCategoryRepository.findById(id);
    if (!subCategory) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return await this.subCategoryRepository.findById(id);
  }

  async findByName(name: string, category: string) {
    return await this.subCategoryRepository.findByName(name, category);
  }

  async create(subCategory: CreateSubCategoryDto) {
    return await this.subCategoryRepository.create(subCategory);
  }

  async update(id: string, subCategory: UpdateSubCategoryDto) {
    const subCategoryExists = await this.subCategoryRepository.findById(id);
    if (!subCategoryExists) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return await this.subCategoryRepository.update(id, subCategory);
  }

  async delete(id: string) {
    const subCategory = await this.subCategoryRepository.findById(id);
    if (!subCategory) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return await this.subCategoryRepository.delete(id);
  }
}
