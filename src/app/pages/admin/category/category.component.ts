import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/app/utils/constant';
import { ICategory } from 'src/interface/category/category';
import { CategoryService } from 'src/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(private service: CategoryService) {}
  categories!: ICategory[];
  url = API_URL;
  ngOnInit(): void {
    this.service.getCategoryList().subscribe((res : any) => {
      this.categories = res.categories
      console.log(res);
    });
  }
}
