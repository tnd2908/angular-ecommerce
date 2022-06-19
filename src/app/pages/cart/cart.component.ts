import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL } from 'src/app/utils/constant';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public grandTotal !: number;
  public cartItems: any = [];
  url = API_URL;

  constructor( private cartService: CartService, private route: Router) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.cartItems = res;
      this.grandTotal = this.cartService.getTotalPrice();
    }) 
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item)
  }

  clearCart() {
    this.cartService.removeAllCart();
    this.route.navigate(["/"])
  }
}
