import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
    this.categories = this.service.getCategoryList();
  }
}
