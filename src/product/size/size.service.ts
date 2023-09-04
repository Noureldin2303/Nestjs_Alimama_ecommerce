import { Injectable } from '@nestjs/common';
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
    return this.sizeRepository.findById(id);
  }

  async findByColor(id: string) {
    return this.sizeRepository.findByColor(id);
  }

  async findByName(name: string) {
    return this.sizeRepository.findByName(name);
  }

  async update(id: string, size: UpdateSizeDto) {
    return this.sizeRepository.update(id, size);
  }

  async deleteByColor(id: string) {
    return this.sizeRepository.deleteByColor(id);
  }

  async delete(id: string) {
    return this.sizeRepository.delete(id);
  }
}
