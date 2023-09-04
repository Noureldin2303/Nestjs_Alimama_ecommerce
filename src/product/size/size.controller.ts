import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { UpdateSizeDto } from './dto/update-size.dto';
import { SizeService } from './size.service';

@Controller('size')
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  @Get()
  async findAll() {
    return this.sizeService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.sizeService.findById(id);
  }

  @Get('color/:id')
  async findByColor(@Param('id') id: string) {
    return this.sizeService.findByColor(id);
  }

  @Get('name/:name')
  async findByName(@Param('name') name: string) {
    return this.sizeService.findByName(name);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() size: UpdateSizeDto) {
    return this.sizeService.update(id, size);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.sizeService.delete(id);
  }
}
