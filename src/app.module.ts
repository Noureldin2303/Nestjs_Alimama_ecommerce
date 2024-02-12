import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigModule } from './config.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AppConfigModule,
    MongooseModule.forRoot(`${process.env.MONGO_URI}store`),
    ProductModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
