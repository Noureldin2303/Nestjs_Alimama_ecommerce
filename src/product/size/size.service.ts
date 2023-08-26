import { Injectable } from '@nestjs/common';
import { SizeRepository } from './size.repository';
import { CreateSizeDto } from './dto/create-size.dto';
import { Types } from 'mongoose';

@Injectable()
export class SizeService {
  constructor(private readonly sizeRepository: SizeRepository) {}

  async create(
    size: CreateSizeDto,
    color: Types.ObjectId,
    product: Types.ObjectId,
  ) {
    return this.sizeRepository.create(size, color, product);
  }
}
