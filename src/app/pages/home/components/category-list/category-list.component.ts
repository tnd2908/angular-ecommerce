import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/interface/category/category';
import { CategoryService } from 'src/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categoryList!: ICategory[];
  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.categoryList = this.service.getCategoryList();
  }

}
