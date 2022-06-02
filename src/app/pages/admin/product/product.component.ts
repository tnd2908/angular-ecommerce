import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { productList } from 'src/dummy/data';
import { IProduct } from 'src/interface/product/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) { }
  products!: IProduct[];
  rate: number = 4;
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.products = productList;
  }

}
