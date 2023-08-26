import { Module } from '@nestjs/common';
import { SizeController } from './size.controller';
import { SizeService } from './size.service';
import { SizeRepository } from './size.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { SizeSchema } from './schema/size.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Size', schema: SizeSchema }])],
  controllers: [SizeController],
  providers: [SizeService, SizeRepository],
  exports: [SizeService],
})
export class SizeModule {}
