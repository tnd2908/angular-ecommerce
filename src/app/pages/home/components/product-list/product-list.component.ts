import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/interface/product/product';
import { ProductService } from 'src/service/product.service';
import { API_URL } from 'src/app/utils/constant';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
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
