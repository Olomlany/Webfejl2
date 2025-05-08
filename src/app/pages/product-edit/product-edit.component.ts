import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  productForm!: FormGroup;
  productId!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      image: ['', Validators.required],
      description: ['']
    });

    this.productService.getAllProducts().subscribe((products) => {
      const product = products.find(p => p.id === this.productId);
      if (product) {
        this.productForm.patchValue(product);
      }
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const updatedProduct: Product = {
        id: this.productId,
        ...this.productForm.value
      };

      this.productService.updateProduct(updatedProduct).subscribe(() => {
        alert('Termék frissítve!');
        this.router.navigate(['/termekek']);
      });
    }
  }
}
