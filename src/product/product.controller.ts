import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Types } from 'mongoose';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const product = await this.productService.create(createProductDto);
    return product;
  }

  @Get()
  async findAll() {
    const products = await this.productService.findAll();
    return products;
  }

  @Get(':id')
  async findById(@Param('id') id: Types.ObjectId) {
    const product = await this.productService.findById(id);
    return product;
  }

  @Put(':id')
  async update(
    @Param('id') id: Types.ObjectId,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const product = await this.productService.update(id, updateProductDto);
    return product;
  }

  @Patch(':id')
  async updateWithPatch(
    @Param('id') id: Types.ObjectId,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const product = await this.productService.updateWithPatch(
      id,
      updateProductDto,
    );
    return product;
  }

  @Delete(':id')
  async delete(@Param('id') id: Types.ObjectId) {
    await this.productService.delete(id);
  }
}
