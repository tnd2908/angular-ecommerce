import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/interface/category/category';
import { CategoryService } from 'src/service/category.service';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories!: ICategory[];

  constructor(private service: ProductService, private cate: CategoryService) { }
  products!: any[];
  rate: number = 4;
  ngOnInit(): void {
  }

}
