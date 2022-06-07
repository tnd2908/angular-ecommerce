import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {
  form!: FormGroup;
  imageList: any[] = [];
  constructor() {}
  ngOnInit(): void {
    this.editForm();
  }
  editForm() {
    this.form = new FormGroup({
      name: new FormControl('Điện thoại', Validators.required),
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
