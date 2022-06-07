import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';

// Mui
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { BrandComponent } from './pages/admin/brand/brand.component';
import { AddBrandComponent } from './pages/admin/add-brand/add-brand.component';
import { EditCategoryComponent } from './pages/admin/edit-category/edit-category.component';
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
    AddProductComponent,
    AddCategoryComponent,
    BrandComponent,
    AddBrandComponent,
    EditCategoryComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    RippleModule,
    TableModule,
    RatingModule,
    InputTextModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MultiSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
