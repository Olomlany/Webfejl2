import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private dbService: NgxIndexedDBService) {}

  addProduct(product: Product) {
    return this.dbService.add('products', product);
  }

  getAllProducts() {
    return this.dbService.getAll<Product>('products');
  }

  updateProduct(product: Product) {
    return this.dbService.update('products', product);
  }

  deleteProduct(id: number) {
    return this.dbService.delete('products', id);
  }
}
