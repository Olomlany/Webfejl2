import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component'; 
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';




export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'termekek', component: ProductListComponent },
  { path: 'termek/:id', component: ProductDetailsComponent },
  { path: 'kosar', component: CartComponent }, 
  { path: 'rendeles', component: CheckoutComponent },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'product-edit/:id', component: ProductEditComponent },
  { path: '**', redirectTo: '' },

];

