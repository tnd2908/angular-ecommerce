import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/interface/brand/brand';
import { BrandService } from 'src/service/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent implements OnInit {
  constructor(private service: BrandService) {}
  brands!: IBrand[];
  ngOnInit(): void {
    this.brands = this.service.getBrandList();
  }
}
