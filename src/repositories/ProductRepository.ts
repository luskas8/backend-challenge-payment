import { Product } from '../entities/Product.js';

export enum ProductDateFilter {
  BEFORE_PROPS = 'BEFORE',
  AFTER_PROPS = 'AFTER',
}

export abstract class ProductRepository {
  abstract save(product: Product): Product;
  abstract list(): Product[];
  abstract getById(id: string): Product;
  abstract getBySeller(seller: string): Product[];
  abstract getByDate(date: Date, orderBy: ProductDateFilter): Product[];
}
