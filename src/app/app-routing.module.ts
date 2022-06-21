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
import { BrandComponent } from './pages/admin/brand/brand.component';
import { AddBrandComponent } from './pages/admin/add-brand/add-brand.component';
import { EditCategoryComponent } from './pages/admin/edit-category/edit-category.component';
import { EditBrandComponent } from './pages/admin/edit-brand/edit-brand.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';
import { UserComponent } from './pages/user/user.component';
import { hasRoleGuard } from './guard';
import { hasAuthGuard } from './authenticate';
import { LayoutMainComponent } from './components/layout-main/layout-main.component';
import { BillComponent } from './pages/admin/bill/bill.component';
import { BillLayoutComponent } from './pages/admin/bill/bill-layout/bill-layout.component';
import { ProductsComponent } from './pages/products/products.component';
import { HistoryComponent } from './pages/history/history.component';
const routes: Routes = [
  {
    path: '', component: LayoutMainComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'product', component: ProductsComponent },
      { path: 'product/:name', component: DetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [hasAuthGuard]
      },
      {
        path: 'user/history',
        component: HistoryComponent,
        canActivate: [hasAuthGuard]
      }
    ]
  },
  {
    path: 'admin',
    component: LayoutComponent,
    canActivate: [hasAuthGuard, hasRoleGuard],
    children: [
      { path: '', component: BillLayoutComponent, children: [
        { path: '', component: BillComponent}
      ] },
      { path: 'product', component: ProductComponent },
      { path: 'product/add', component: AddProductComponent },
      { path: 'product/edit/:id', component: ProductEditComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'category/add', component: AddCategoryComponent },
      { path: 'category/edit/:id', component: EditCategoryComponent },
      { path: 'brand', component: BrandComponent },
      { path: 'brand/add', component: AddBrandComponent },
      { path: 'brand/edit/:id', component: EditBrandComponent },
      { path: 'bill', component: BillComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
