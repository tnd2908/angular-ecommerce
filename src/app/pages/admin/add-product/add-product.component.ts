import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/interface/brand/brand';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    { name: 'Black', value: '#000'},
    { name: 'White', value: 'white'},
    { name: 'Silver', value: 'silver'},
    { name: 'Grey', value: 'grey'},
    { name: 'Red', value: 'red'},
  ]
  rom: any[] = romData;
  selectedRom: any = {
    name: '', value: ''
  };
  saleOff : any[] = [
    { name: 'Giảm giá', value: true },
    { name: 'Không giảm giá', value: false },
  ]
  isVisibleFail = false;
  isVisibleSuccess = false;
  isLoading = false;
  isSubmit = false;
  constructor(private http: HttpClient, private service: ProductService, private categoryService : CategoryService, private brandService: BrandService) { }
  ngOnInit(): void {
    this.initForm();
    this.getData();

  }
  onRomChange = (data : any) => {
    console.log(21);
  }
  get totalQuantity() { return this.form.get('totalQuantity') }
  get name() { return this.form.get('name') }
  get category() { return this.form.get('category') }
  get brand() { return this.form.get('brand') }
  get price() { return this.form.get('price') }
  get description() { return this.form.get('description') }
  get discountPrice() { return this.form.get('discountPrice') }
  initForm = () => {
    const sale = null;
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.pattern(/^(([0-9]*[1-9][0-9]*([.][0-9]+)?)|([0]+[.][0-9]*[1-9][0-9]*))$/)]),
      brand: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      colors: new FormControl([], Validators.required),
      rom: new FormControl([], Validators.required),
      totalQuantity: new FormControl(0, [Validators.required, Validators.pattern(/^(([0-9]*[1-9][0-9]*([.][0-9]+)?)|([0]+[.][0-9]*[1-9][0-9]*))$/)]),
      ram: new FormControl(''),
      discountPrice: sale 
        ? new FormControl(null, [ Validators.required, Validators.pattern(/\b([0-9]|[1-9][0-9]|100)\b/)]) 
        : new FormControl(),
      typeOfSale: new FormControl({ name: 'Không giảm giá', value: null })
    });
    this.form.get("rom")!.valueChanges.subscribe((x : any)=> {
      console.log(x);
      if (!x.length) {
        this.rom = romData;
      }
      x.forEach((element : any) => {
        if (element.value === null) {
          console.log(1);
          this.rom = romData.filter(item => item.value === null)
        }
      });
    })
    this
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
      this.categories = res.categories;
    })
    this.brandService.getBrandList().subscribe((res : any) => {
      this.brands = res.brands
    })
  }
  onSubmit = () => {
    console.log(this.form.value);
    this.isSubmit = true
    const data = { ...this.form.value, images: this.imageNameList }
    if (this.form.valid) {
      this.service.addProduct(data).subscribe((res : any) => {
        console.log(res);
        if (res.success === true) {
          this.isVisibleSuccess = true;
        } else {
          this.isVisibleFail = true
        }
      })
    } 
  };
}
