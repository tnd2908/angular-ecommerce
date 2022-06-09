import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/interface/brand/brand';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/utils/constant';
import { ProductService } from 'src/service/product.service';
import { CategoryService } from 'src/service/category.service';
import { BrandService } from 'src/service/brand.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  brands!: any[];
  categories! : any[];
  form!: FormGroup;
  imageList: any[] = [];
  colors: any[] = [
    { name: 'black', value: '#000'},
    { name: 'red', value: 'red'},
    { name: 'black', value: '#ff0'},
    { name: 'red', value: 'blue'},
    { name: 'black', value: 'green'},
    { name: 'red', value: 'grey'},
  ]
  selectedColors : any[] = [];
  myStyle={"background-color":"blue"}
  constructor(private http: HttpClient, private service: ProductService, private categoryService : CategoryService, private brandService: BrandService) { }
  ngOnInit(): void {
    this.initForm();
    this.getData();
  }
  initForm = () => {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      brands: new FormControl('', Validators.required),
      file: new FormControl(null, Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      colors: new FormControl([], Validators.required),
      rom: new FormControl([], Validators.required),
      totalQuantity: new FormControl(0)
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
  getData = () => {
    this.categoryService.getCategoryList().subscribe((res : any) => {
      this.categories = res.categories;
    })
    this.brandService.getBrandList().subscribe((res : any) => {
      this.brands = res.brands
    })
  }
  onSubmit = () => {
    console.log(this.form.value);
    const data = { ...this.form.value, images: this.imageList }
    this.service.addProduct(data).subscribe((res) => {
      console.log(res);
    })
  };
}
