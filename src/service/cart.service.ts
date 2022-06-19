import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  data = JSON.parse(localStorage.getItem('cart')!)
  public cart : any = this.data ? this.data : [];

  constructor(private notification: NzNotificationService) { }
  getProducts(){
    return this.cart
  }

  addtoCart(product : any){
    this.notification.success('Thành công', 'Đã thêm sản phẩm vào giỏ hàng')
    if(this.cart.length) {
      this.cart.forEach((item : any) => {
        if (item._id === product._id) {
          item.quantity = item.quantity +1
        } else {
          this.cart.push({...product, quantity: 1});
        }
      })
    } else {
      this.cart.push({...product, quantity: 1});
    }
    
    console.log(this.cart);
    
    localStorage.setItem('cart',JSON.stringify(this.cart))
 }
 increase = (product:any) => {
  this.cart.forEach((item : any) => {
    if (item._id === product._id) {
      item.quantity = item.quantity +1
    }
  })
  localStorage.setItem('cart', JSON.stringify(this.cart))
 }
 decrease = (product : any) => {
  this.cart.forEach((item : any) => {
    if (item._id === product._id) {
      item.quantity = item.quantity - 1
    }
  })
  localStorage.setItem('cart', JSON.stringify(this.cart))
 }
  getTotalPrice() : number{
    let total = 0
    this.cart.forEach((item : any) => {
      total += item.price * item.quantity
    })
    return total;
  }
  removeCartItem(product: any){
    this.cart = this.cart.filter((item : any) => item._id !== product._id)
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
  clearCart(){
    this.cart = []
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
}