import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/interface/brand/brand';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  brands: IBrand[] = [
    {
      name: 'Apple',
      logo: ''
    },
    {
      name: 'Samsung',
      logo: ''
    }
  ];
  constructor() { }
  ngOnInit(): void {
    this.brands = [
      {
        name: 'Apple',
        logo: ''
      },
      {
        name: 'Samsung',
        logo: ''
      }
    ]
  }

}
