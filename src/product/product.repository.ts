import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Types, Model } from 'mongoose';
import { Product, ProductDocument } from './schema/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ColorService } from './color/color.service';
import { CreateColorDto } from './color/dto/create-color.dto';
import { StoreProductDto } from './dto/store-product.dto';
import { CategoryService } from './category/category.service';
import { SubcategoryService } from './subcategory/subcategory.service';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
    private readonly colorService: ColorService,
    private readonly categoryService: CategoryService,
    private readonly subcategoryService: SubcategoryService,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findById(id: Types.ObjectId): Promise<Product> {
    return this.productModel.findById(id).exec();
  }

  async create(product: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(product);
    await createdProduct.save();

    const createdColors = await Promise.all(
      product.colors.map(async (color: CreateColorDto) => {
        return await this.colorService.create(color, createdProduct._id);
      }),
    );

    const createdCategory = await this.categoryService.create(product.category);

    const createdSubCategory = await this.subcategoryService.create(
      product.subCategory,
      createdCategory._id,
    );

    const newproduct: StoreProductDto = {
      ...product,
      category: createdCategory._id,
      subCategory: createdSubCategory._id,
      colors: createdColors.map((color) => color._id),
    };
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      createdProduct._id,
      newproduct,
      { new: true },
    );
    return updatedProduct;
  }

  async update(
    id: Types.ObjectId,
    product: UpdateProductDto,
  ): Promise<Product> {
    return this.productModel
      .findByIdAndUpdate(id, product, { new: true })
      .exec();
  }

  async updateWithPatch(
    id: Types.ObjectId,
    product: UpdateProductDto,
  ): Promise<Product> {
    return this.productModel
      .findByIdAndUpdate(id, { $set: product }, { new: true })
      .exec();
  }

  async delete(id: Types.ObjectId): Promise<void> {
    await this.productModel.findByIdAndDelete(id).exec();
  }
}
