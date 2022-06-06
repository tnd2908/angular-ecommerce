import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/interface/brand/brand';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  brands: IBrand[] = [
    {
      name: 'Apple',
      logo: ''
    },
    {
      name: 'Samsung',
      logo: ''
    }
  ];
  form!: FormGroup;
  constructor() { }
  ngOnInit(): void {
    this.brands = [
      {
        name: 'Apple',
        logo: ''
      },
      {
        name: 'Samsung',
        logo: ''
      }
    ]
    this.initForm()
  }
  initForm(){
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      brands: new FormControl('', Validators.required),
    })
  }

  onSubmit = () => {
    console.log(this.form.value);
  }
}
