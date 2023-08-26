import { Module } from '@nestjs/common';
import { SubCategoryRepository } from './subcategory.repository';
import { SubcategoryController } from './subcategory.controller';
import { SubcategoryService } from './subcategory.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SubCategorySchema } from './schema/subcategory.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'SubCategory', schema: SubCategorySchema },
    ]),
  ],
  controllers: [SubcategoryController],
  providers: [SubcategoryService, SubCategoryRepository],
  exports: [SubcategoryService],
})
export class SubcategoryModule {}
