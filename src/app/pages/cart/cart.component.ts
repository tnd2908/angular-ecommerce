import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList!: any[];
  formatPrice = (price: number) => {
    return new Intl.NumberFormat('#.###').format(price);
  }
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getProductList().subscribe((res : any) => {
      this.cartList = res.data
    })
  }
}
