import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FilterProductDto } from './dto/filter-product-dto';

export interface filterQuery {
  category: string;
  subcategory: string;
  color: string;
  size: string;
  minprice: number;
  maxprice: number;
  search: string;
}

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const product = await this.productService.create(createProductDto);
    return product;
  }

  @Get()
  async findAll(@Query() filterProductDto: FilterProductDto) {
    const products = await this.productService.findAll(filterProductDto);
    return products;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const product = await this.productService.findById(id);
    return product;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const product = await this.productService.update(id, updateProductDto);
    return product;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.productService.delete(id);
  }
}
