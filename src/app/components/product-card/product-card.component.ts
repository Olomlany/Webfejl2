import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
import { CartService } from '../../cart.service';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule, CapitalizePipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();


  constructor(private cartService: CartService, private router: Router) {}

  addToCart() {
    this.cartService.addToCart(this.product);
    this.router.navigate(['/kosar']);
  }

  onDelete() {
    this.delete.emit(this.product.id!); 
  }

}
