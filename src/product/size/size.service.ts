import { Injectable, NotFoundException } from '@nestjs/common';
import { SizeRepository } from './size.repository';
import { CreateSizeDto } from './dto/create-size.dto';
import { Types } from 'mongoose';
import { UpdateSizeDto } from './dto/update-size.dto';

@Injectable()
export class SizeService {
  constructor(private readonly sizeRepository: SizeRepository) {}

  async create(size: CreateSizeDto, color: Types.ObjectId, product: string) {
    return this.sizeRepository.create(size, color, new Types.ObjectId(product));
  }

  async findAll() {
    return this.sizeRepository.findAll();
  }

  async findById(id: string) {
    const size = await this.sizeRepository.findById(id);
    if (!size) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return size;
  }

  async findByColor(id: string) {
    return this.sizeRepository.findByColor(id);
  }

  async findByName(name: string) {
    return this.sizeRepository.findByName(name);
  }

  async update(id: string, size: UpdateSizeDto) {
    const sizeExists = await this.sizeRepository.findById(id);
    if (!sizeExists) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return this.sizeRepository.update(id, size);
  }

  async deleteByColor(id: string) {
    return this.sizeRepository.deleteByColor(id);
  }

  async delete(id: string) {
    const size = await this.sizeRepository.findById(id);
    if (!size) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return this.sizeRepository.delete(id);
  }
}
