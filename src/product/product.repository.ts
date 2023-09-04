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

  async findAll(filters: any): Promise<Product[]> {
    const products = await this.productModel.aggregate([
      {
        $lookup: {
          from: 'categories',
          localField: 'category',
          foreignField: '_id',
          as: 'category',
        },
      },
      {
        $lookup: {
          from: 'subcategories',
          localField: 'subCategory',
          foreignField: '_id',
          as: 'subCategory',
        },
      },
      {
        $lookup: {
          from: 'colors',
          localField: 'colors',
          foreignField: '_id',
          as: 'colors',
        },
      },
      {
        $lookup: {
          from: 'sizes',
          localField: 'colors.sizes',
          foreignField: '_id',
          as: 'colors.sizes',
        },
      },
      {
        $match: filters,
      },
    ]);

    return products;
  }

  async findById(id: string): Promise<Product> {
    const product = await this.productModel
      .find({ _id: new Types.ObjectId(id) })
      .populate('category subCategory')
      .populate({
        path: 'colors',
        populate: {
          path: 'sizes',
          model: 'Size',
        },
      })
      .exec();
    return product[0];
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    await createdProduct.save();

    const createdColors = await Promise.all(
      createProductDto.colors.map(async (color: CreateColorDto) => {
        return await this.colorService.create(color, createdProduct._id);
      }),
    );

    const createdCategory = await this.categoryService.findByName(
      createProductDto.category,
    );

    const createdSubcategory = await this.subcategoryService.findByName(
      createProductDto.subCategory,
      createProductDto.category,
    );

    const storeProduct: StoreProductDto = {
      ...createProductDto,
      category: createdCategory._id,
      subCategory: createdSubcategory._id,
      colors: createdColors.map((color) => color._id),
    };

    const updatedProduct = await this.productModel.findOneAndUpdate(
      createdProduct._id,
      storeProduct,
      { new: true },
    );

    return updatedProduct;
  }

  async update(
    product: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    await this.colorService.deleteByProduct(product);

    const newColors = await Promise.all(
      updateProductDto.colors.map(async (color: CreateColorDto) => {
        return await this.colorService.create(color, product);
      }),
    );

    const newCategory = await this.categoryService.findByName(
      updateProductDto.category,
    );
    const newSubCategory = await this.subcategoryService.findByName(
      updateProductDto.subCategory,
      updateProductDto.category,
    );

    const updatedProduct: StoreProductDto = {
      name: updateProductDto.name,
      description: updateProductDto.description,
      category: newCategory._id,
      subCategory: newSubCategory._id,
      colors: newColors.map((color) => color._id),
    };

    return await this.productModel
      .findOneAndUpdate(
        { _id: new Types.ObjectId(product) },
        { $set: updatedProduct },
        { new: true },
      )
      .exec();
  }

  async delete(id: string): Promise<void> {
    await this.productModel
      .findOneAndDelete({ _id: new Types.ObjectId(id) })
      .exec();
  }
}
