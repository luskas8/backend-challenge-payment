import { randomUUID as uuid } from 'crypto';

export class Product {
  id: string;
  title: string;
  price: number;
  zipcode: string;
  seller: string;
  thumbnailHd: string;
  date: Date;

  private constructor(args: Omit<Product, 'id'>) {
    this.id = uuid();
    this.title = args.title;
    this.price = args.price;
    this.zipcode = args.zipcode;
    this.seller = args.seller;
    this.thumbnailHd = args.thumbnailHd;
    this.date = args.date;
  }

  create(args: Omit<Product, 'id'>): Product {
    // create product
    return new Product(args);
  }
}
