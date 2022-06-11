import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsRepository } from '../repository/products.repository';
import { ProductsService } from '../services/products.service';
import { ProductsController } from '../controllers/products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsRepository])],
  controllers: [ProductsController],
  providers: [ProductsService],
})

export class ProductsModule {}
