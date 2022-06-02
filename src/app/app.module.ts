import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/home/components/product-list/product-list.component';
import { CategoryListComponent } from './pages/home/components/category-list/category-list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductComponent } from './pages/admin/product/product.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';

// prime module
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductListComponent,
    CategoryListComponent,
    DetailComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    ProductComponent,
    ProductEditComponent,
    CategoryComponent,
    AddProductComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    TableModule,
    RatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
