import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/interface/brand/brand';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/utils/constant';
import { ProductService } from 'src/service/product.service';
import { CategoryService } from 'src/service/category.service';
import { BrandService } from 'src/service/brand.service';
import { romData } from 'src/dummy/data';
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
  imageNameList: any[] = [];
  colors: any[] = [
    { name: 'Đen', value: '#000'},
    { name: 'Trắng', value: 'white'},
    { name: 'Bạc', value: 'silver'},
    { name: 'Xám', value: 'grey'},
    { name: 'Đỏ', value: 'red'},
    { name: 'Xanh lá', value: 'green' },
    { name: 'Tím', value: 'purple' },
    { name: 'Xanh', value: 'aqua' }
  ]
  isVisibleFail = false;
  isVisibleSuccess = false;
  isLoading = false;
  isSubmit = false;
  constructor(private http: HttpClient, private service: ProductService, private categoryService : CategoryService, private brandService: BrandService) { }
  ngOnInit(): void {
    this.initForm();
    this.onAdd();
    this.getData();

  }
  get totalQuantity() { return (<FormArray>this.form.get('totalQuantity')).controls }
  get name() { return this.form.get('name') }
  get category() { return this.form.get('category') }
  get brand() { return this.form.get('brand') }
  get price() { return (<FormArray>this.form.get('price')).controls }
  get rom() { return (<FormArray>this.form.get('rom')).controls }
  get description() { return this.form.get('description') }
  get discountPrice() { return this.form.get('discountPrice') }
  initForm = () => {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      colors: new FormControl([], Validators.required),
      rom: new FormArray([], Validators.required),
      totalQuantity: new FormArray([]),
      ram: new FormArray([]),
      price: new FormArray([]),
    });
  }
  onAdd = () => {
    const price = new FormControl(0, [Validators.required, Validators.pattern(/^(([0-9]*[1-9][0-9]*([.][0-9]+)?)|([0]+[.][0-9]*[1-9][0-9]*))$/)])
    const totalQuantity = new FormControl(0, [Validators.required, Validators.pattern(/^(([0-9]*[1-9][0-9]*([.][0-9]+)?)|([0]+[.][0-9]*[1-9][0-9]*))$/)])
    const rom = new FormControl('', [Validators.required]);
    const ram = new FormControl('', Validators.required);
    (<FormArray>this.form.get('price')).push(price);
    (<FormArray>this.form.get('rom')).push(rom);
    (<FormArray>this.form.get('totalQuantity')).push(totalQuantity);
    (<FormArray>this.form.get('ram')).push(ram);
  }
  onFileSelected = (event : any) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    const formData = new FormData();
    formData.append('file', event.target.files[0])
    reader.onload = (e : any) => {
      this.imageList.push(e.target.result)
      this.imageNameList.push(event.target.files[0].name)
      this.http.post(`${API_URL}upload`, formData).subscribe((res) => {
        console.log(res);
      })
    }
  }
  getData = () => {
    this.categoryService.getCategoryList().subscribe((res : any) => {
      this.categories = res.categories.filter((item : any) => item.type === 'MAIN');
    })
    this.brandService.getBrandList().subscribe((res : any) => {
      this.brands = res.brands
    })
  }
  onRemove(i : any) {
    (<FormArray>this.form.get('price')).removeAt(i);
    (<FormArray>this.form.get('totalQuantity')).removeAt(i);
    (<FormArray>this.form.get('rom')).removeAt(i);
    (<FormArray>this.form.get('ram')).removeAt(i);
  }
  onSubmit = () => {
    console.log(this.form.value);
    this.isSubmit = true
    const data = { ...this.form.value, images: this.imageNameList }
    console.log(data.description);
    
    if (this.form.valid) {
      this.isLoading = true;
      this.service.addProduct(data).subscribe((res : any) => {
        console.log(res);
        this.isLoading = false;
        if (res.success === true) {
          this.isVisibleSuccess = true;
          this.isSubmit = false;
          this.form.reset();
        } else {
          this.isVisibleFail = true
        }
      })
    } 
  };
}
