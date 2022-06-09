import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/app/utils/constant';
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
  url = API_URL;
  ngOnInit(): void {
    this.service.getBrandList().subscribe((res : any) => {
      this.brands = res.brands
    });
  }
}
