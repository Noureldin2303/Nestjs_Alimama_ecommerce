import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';
import { FilterProductDto } from './dto/filter-product-dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto);
  }

  async findAll(filterProductDto: FilterProductDto) {
    const { category, subCategory, color, size, minprice, maxprice, search } =
      filterProductDto;

    const filters = {} as any;

    search && (filters['name'] = { $regex: search, $options: 'i' });
    search && (filters['description'] = { $regex: search, $options: 'i' });
    category && (filters['category.name'] = category);
    subCategory
      ? Array.isArray(subCategory)
        ? (filters['subCategory.name'] = { $in: subCategory })
        : (filters['subCategory.name'] = subCategory)
      : {};
    color &&
      (filters['colors.name'] = { $regex: new RegExp(`^${color}$`, 'i') });
    size &&
      (filters['colors.sizes.name'] = { $regex: new RegExp(`^${size}$`, 'i') });

    if (minprice && maxprice) {
      filters['colors.price'] = {
        $gte: parseInt(minprice),
        $lte: parseInt(maxprice),
      };
    } else if (minprice && !maxprice) {
      filters['colors.price'] = { $gte: parseInt(minprice) };
    } else if (maxprice && !minprice) {
      filters['colors.price'] = { $lte: parseInt(maxprice) };
    }

    return this.productRepository.findAll(filters);
  }

  async findById(id: string) {
    const product = this.productRepository.findById(id);

    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

  async delete(id: string) {
    return this.productRepository.delete(id);
  }
}
