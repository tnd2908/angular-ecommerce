import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IProduct } from 'src/interface/product/product';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public id!: number
  constructor(private service : ProductService, private route: ActivatedRoute, private router: Router) { }
  @Input() product! : IProduct;

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    
    this.route.params.subscribe((param : Params) => {
      this.id = +param['id'];
      console.log(param);
      
      this.product = this.service.getDetail(this.id)!;
      console.log(this.product);
    })
  }
}
