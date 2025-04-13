import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];

  getCart(): Product[] {
    return this.items;
  }

  addToCart(product: Product): void {
    this.items.push(product);
  }

  clearCart(): void {
    this.items = [];
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  removeFromCart(index: number): void {
    this.items.splice(index, 1);
  }
  
}
