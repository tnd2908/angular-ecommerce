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
import { NgxPayPalModule } from 'ngx-paypal';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
// prime module
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';
import {DialogModule} from 'primeng/dialog';
import {SelectButtonModule} from 'primeng/selectbutton';
import {PaginatorModule} from 'primeng/paginator';
import {DataViewModule} from 'primeng/dataview';

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
import { EditBrandComponent } from './pages/admin/edit-brand/edit-brand.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { DashboardComponent } from './pages/user/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { UserInfoComponent } from './pages/user/user-info/user-info.component';
import {PasswordModule} from 'primeng/password';

import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { LayoutMainComponent } from './components/layout-main/layout-main.component';
import { BillComponent } from './pages/admin/bill/bill.component';
import { BillLayoutComponent } from './pages/admin/bill/bill-layout/bill-layout.component';
import { AdminUserComponent } from './pages/admin/user/user.component';

import { ProductsComponent } from './pages/products/products.component';
import { HistoryComponent } from './pages/history/history.component';
registerLocaleData(en);
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
    EditBrandComponent,
    DashboardComponent,
    UserComponent,
    UserInfoComponent,
    LayoutMainComponent,
    BillComponent,
    BillLayoutComponent,
    AdminUserComponent,
    ProductsComponent,
    HistoryComponent
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
    DialogModule,
    NzModalModule,
    SelectButtonModule,
    NzNotificationModule,
    NgxPayPalModule,
    NzTagModule,
    PaginatorModule,
    DataViewModule,
    NzCollapseModule,
    PasswordModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
