import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { CreateSubCategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubCategoryDto } from './dto/update-subcategory.dto';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private readonly subcategoryService: SubcategoryService) {}

  @Get()
  async findAll() {
    return await this.subcategoryService.findAll();
  }

  @Post()
  async create(@Body() createSubCategoryDto: CreateSubCategoryDto) {
    const subcategory =
      await this.subcategoryService.create(createSubCategoryDto);
    return subcategory;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const subcategory = await this.subcategoryService.findById(id);
    return subcategory;
  }

  @Get(':name')
  async findByName(
    @Param('name') name: string,
    @Param('name') category: string,
  ) {
    const subcategory = await this.subcategoryService.findByName(
      name,
      category,
    );
    return subcategory;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateSubCategoryDto) {
    return this.subcategoryService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.subcategoryService.delete(id);
  }
}
