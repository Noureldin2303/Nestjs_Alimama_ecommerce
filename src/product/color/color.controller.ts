import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { UpdateColorDto } from './dto/update-color.dto';
import { ColorService } from './color.service';

@Controller('color')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Get()
  async findAll() {
    return await this.colorService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.colorService.findById(id);
  }

  @Get('product/:id')
  async findByProduct(@Param('id') id: string) {
    return this.colorService.findByProduct(id);
  }

  @Get('name/:name')
  async findByName(@Param('name') name: string) {
    const color = await this.colorService.findByName(name);
    return color;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateColorDto) {
    return this.colorService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.colorService.delete(id);
  }
}
