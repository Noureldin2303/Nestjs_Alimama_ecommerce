import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';
import { Types } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto);
  }

  async findAll() {
    return this.productRepository.findAll();
  }

  async findById(id: Types.ObjectId) {
    const product = this.productRepository.findById(id);

    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  }

  async update(id: Types.ObjectId, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

  async updateWithPatch(
    id: Types.ObjectId,
    updateProductDto: UpdateProductDto,
  ) {
    return this.productRepository.updateWithPatch(id, updateProductDto);
  }

  async delete(id: Types.ObjectId) {
    return this.productRepository.delete(id);
  }
}
