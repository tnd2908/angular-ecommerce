import { ICategory } from './../../../../interface/category/category';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/service/category.service';
import { ActivatedRoute, Params } from '@angular/router';
import { API_URL } from 'src/app/utils/constant';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {
  form!: FormGroup;
  imageList: any[] = [];
  id!: string;
  category!: ICategory;
  url = API_URL;
  constructor(
    private service: CategoryService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.route.params.subscribe((param: Params) => {
      this.id = param['id'];
      this.service.getCategoryDetail(this.id)!.subscribe((res : any) => {
        this.category = res.category
        this.form = new FormGroup({
          name: new FormControl(res.category.name, Validators.required),
        });
      });
    });
  }
  onFileSelected = (event: any) => {
    console.log(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e: any) => {
      this.imageList.push(e.target.result);
    };
  };
  onSubmit = () => {
    console.log(this.form.value);
  };
}
