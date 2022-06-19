import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { API_URL } from 'src/app/utils/constant';
import { IProduct } from 'src/interface/product/product';
import { CartService } from 'src/service/cart.service';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  name!: String
  relatedProductList!: any[]
  activeImage!: String
  model: any[] = []
  url = API_URL
  constructor(private service : ProductService, private route: ActivatedRoute, private cartService: CartService) { }
  @Input() product! : any;

  ngOnInit(): void {
    
    // this.service.getProductList().subscribe(() => {
    //   this.relatedProductList
    // })
    this.getData()
  }
  getData = () => {
    window.scrollTo(0, 0);
    this.route.params.subscribe((param : Params) => {
      this.name = param['name'];      
      this.service.getDetail(this.name).subscribe((res : any) => {
        console.log(res.data);
        
        this.product = res.data.detail
        this.relatedProductList = res.data.relatedProductList
        this.model = res.data.model
        this.activeImage = `${API_URL}upload/${res.data.detail.images[0]}`
      });
    })
  }
  addToCart(product: any) {
    this.cartService.addtoCart(product)
  }
}
