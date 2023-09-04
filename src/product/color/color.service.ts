import { Injectable } from '@nestjs/common';
import { ColorRepository } from './color.repository';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';

@Injectable()
export class ColorService {
  constructor(private readonly colorRepository: ColorRepository) {}

  async create(color: CreateColorDto, product: string) {
    return this.colorRepository.create(color, product);
  }

  async findAll() {
    return this.colorRepository.findAll();
  }

  async findById(id: string) {
    return this.colorRepository.findById(id);
  }

  async findByProduct(id: string) {
    return this.colorRepository.findByProduct(id);
  }

  async findByName(name: string, product?: string) {
    return this.colorRepository.findByName(name, product);
  }

  async update(id: string, color: UpdateColorDto) {
    return this.colorRepository.update(id, color);
  }

  async deleteByProduct(id: string) {
    return this.colorRepository.deleteByProduct(id);
  }

  async delete(id: string) {
    return this.colorRepository.delete(id);
  }
}
