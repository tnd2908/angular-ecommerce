import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/interface/brand/brand';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  form!: FormGroup;
  imageList: any[] = [];
  constructor() {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      brands: new FormControl('', Validators.required),
      file: new FormControl(null, Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      colors: new FormControl([], Validators.required),
      rom: new FormControl([], Validators.required),
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
