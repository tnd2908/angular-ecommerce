import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/interface/brand/brand';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/utils/constant';
import { ProductService } from 'src/service/product.service';
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
  constructor(private http: HttpClient, private service: ProductService) { }
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
  onFileSelected = (event : any) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    const formData = new FormData();
    formData.append('file', event.target.files[0])
    reader.onload = (e : any) => {
      this.imageList.push(e.target.result)
      this.http.post(`${API_URL}upload`, formData).subscribe((res) => {
        console.log(res);
      })
    }
  }
  onSubmit = () => {
    console.log(this.form.value);
    const data = { ...this.form.value, images: this.imageList }
    this.service.addProduct(data).subscribe((res) => {
      console.log(res);
    })
  };
}
