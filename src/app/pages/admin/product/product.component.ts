import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { API_URL } from 'src/app/utils/constant';
import { productList } from 'src/dummy/data';
import { IProduct } from 'src/interface/product/product';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig, private service: ProductService) { }
  products!: any[];
  rate: number = 4;
  url = API_URL;
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getData()
  }
  getData = () => {
    this.service.getProductList().subscribe((res : any) => {
      console.log(res);
      this.products = res.data;
    })
  }
}
