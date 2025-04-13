import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  get items() {
    return this.cartService.getCart();
  }

  get total() {
    return this.cartService.getTotal();
  }

  clearCart() {
    this.cartService.clearCart();
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
  }
  
}
