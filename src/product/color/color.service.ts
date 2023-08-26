import { Injectable } from '@nestjs/common';
import { ColorRepository } from './color.repository';
import { CreateColorDto } from './dto/create-color.dto';
import { Types } from 'mongoose';

@Injectable()
export class ColorService {
  constructor(private readonly colorRepository: ColorRepository) {}

  async create(color: CreateColorDto, product: Types.ObjectId) {
    return this.colorRepository.create(color, product);
  }
}
