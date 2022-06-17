import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/interface/product/product';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList!: any[]
  formatPrice = (price: number) => {
    return new Intl.NumberFormat('#.###').format(price);
  }
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getProductList().subscribe((res : any) => {
      this.productList = res.data
    })
  }
  getActiveStar(range: number){
    return new Array(range);
  }
  getInActiveStar(range: number) {
    return new Array(5-range);
  }
}
