import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductComponent } from './pages/admin/product/product.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { CartComponent } from './pages/cart/cart.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: DetailComponent },
  { path: 'product/:id', component: DetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'product', component: ProductComponent },
      { path: 'product/add', component: AddProductComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'category/add', component: AddCategoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
