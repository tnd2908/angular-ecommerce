import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/interface/brand/brand';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  brands: IBrand[] = [
    {
      _id: 'a',
      name: 'Apple',
      logo: '',
    },
    {
      _id: 'b',
      name: 'Samsung',
      logo: '',
    },
  ];
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
