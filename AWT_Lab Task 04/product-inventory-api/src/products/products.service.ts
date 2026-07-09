import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Products } from './entities/products.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = this.productsRepository.create(createProductDto);
    return this.productsRepository.save(product);
  }

  findAll() {
    return this.productsRepository.find();
  }

  async findOne(id: number) {
    const product = await this.productsRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.findOne(id);

    await this.productsRepository.update(id, updateProductDto);

    return this.findOne(id);
  }

  async partialUpdate(
    id: number,
    partialUpdateDto: PartialUpdateProductDto,
  ) {
    await this.findOne(id);

    await this.productsRepository.update(id, partialUpdateDto);

    return this.findOne(id);
  }

  async remove(id: number) {
    const product = await this.findOne(id);

    await this.productsRepository.remove(product);

    return {
      message: 'Product deleted successfully',
    };
  }
}