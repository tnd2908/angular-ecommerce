import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL } from 'src/app/utils/constant';
import { CartService } from 'src/service/cart.service';
import {
  IPayPalConfig,
  ICreateOrderRequest 
} from 'ngx-paypal';
import { BillService } from 'src/service/bill.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList!: any[];
  public total: number = 0;
  public cartItems: any = [];
  url = API_URL;
  public payPalConfig ? : IPayPalConfig;
  dolar = 23000;
  constructor( private cartService: CartService, private route: Router, private billService: BillService, private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.getCart();
    this.initConfig()
  }
  showSuccess = () => {
    this.notification.success('Giao dịch thành công', 'Đơn hàng của bạn đã được thanh toán, cửa hàng sẽ giao hàng cho bạn trong thời gian sớm nhất')
  }
  private initConfig(): void {
    this.payPalConfig = {
        currency: 'USD',
        clientId: 'AYqIImRGwaD0vQH79eGyaiN6yY2irrsht4RbRzIYwPNWIWMAbeXqkd99DJ7yDSlvHzTrpqwjv_ZGstj4',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: (this.total/this.dolar).toFixed(1).toString(),
                    breakdown: {
                        item_total: {
                            currency_code: 'USD',
                            value: (this.total/this.dolar).toFixed(1).toString()
                        }
                    }
                },
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            actions.order.get().then((details : any) => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
                const { amount, payee, shipping } = details.purchase_units[0]
                this.billService.addBill({
                  name: shipping.name.full_name,
                  email: payee.email_address,
                  address: shipping.address.address_line_1 + ' ' + shipping.address.admin_area_2,
                  phone: 0,
                  status: 'Completed',
                  delivery: 0,
                  total: this.total,
                  details: this.cartItems.map((item : any) => {
                    return { 
                      productId: item._id,
                      productName: item.name,
                      quantity: item.quantity,
                      cost: item.price,
                    }
                  })
                }).subscribe((res : any) => {
                  console.log(res);
                  this.showSuccess()
                })
            });

        },
      onCancel: (data, actions) => {
          console.log('OnCancel', data, actions);

      },
        onError: err => {
            console.log('OnError', err);
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
        }
    };
  }
  getCart = () => {
    this.cartItems = this.cartService.getProducts();
    this.total = this.cartService.getTotalPrice();
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item)
    this.getCart();
  }

  clearCart() {
    this.cartService.clearCart();
  }
  increase = (product : any) => {
    this.cartService.increase(product);
    this.getCart();
  }
  decrease = (product : any) => {
    this.cartService.decrease(product);
    this.getCart();
  }
}
