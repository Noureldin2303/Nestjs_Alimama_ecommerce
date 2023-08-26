import { Module } from '@nestjs/common';
import { ColorController } from './color.controller';
import { ColorService } from './color.service';
import { ColorRepository } from './color.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { ColorSchema } from './schema/color.schema';
import { SizeModule } from '../size/size.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Color', schema: ColorSchema }]),
    SizeModule,
  ],
  controllers: [ColorController],
  providers: [ColorService, ColorRepository],
  exports: [ColorService],
})
export class ColorModule {}
