import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/app/utils/constant';
import { ICategory } from 'src/interface/category/category';
import { CategoryService } from 'src/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categoryList!: any[];
  constructor(private service: CategoryService) { }
  url = API_URL
  ngOnInit(): void {
    this.service.getCategoryList().subscribe((res : any) => {
      this.categoryList = res.categories.map((item : any) => {
        return {
          ...item,
          imageUrl: `${API_URL}upload/${item.icon}`
        }
      })
    });
  }
}
