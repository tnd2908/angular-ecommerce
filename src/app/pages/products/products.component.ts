import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/service/cart.service';
import { CategoryService } from 'src/service/category.service';
import { ProductService } from 'src/service/product.service';
import { CategoryListComponent } from '../home/components/category-list/category-list.component';
import { API_URL } from 'src/app/utils/constant';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList!: any[]
  url = API_URL;
  image!: number
  formatPrice = (price: number) => {
    return new Intl.NumberFormat('#.###').format(price);
  }
  constructor(private service: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getData()
  }
  getActiveStar(range: number){
    return new Array(range);
  }
  getInActiveStar(range: number) {
    return new Array(5-range);
  }
  getData = () => {
    this.service.getProductList().subscribe((res : any) => {
      this.productList = res.data;
      console.log(this.productList);
    })
  }

  addToCart(product: any) {
    this.cartService.addtoCart(product)
  }
}
