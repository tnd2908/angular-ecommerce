import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { API_URL } from 'src/app/utils/constant';
import { BrandService } from 'src/service/brand.service';
import { CategoryService } from 'src/service/category.service';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  constructor(
    private service: ProductService, 
    private route: ActivatedRoute, 
    private cateService: CategoryService, 
    private brandService: BrandService, 
    private http: HttpClient, 
    private modal: NzModalService,
    private router: Router,
  ) { }
  id!: String;
  product: any;
  form!: FormGroup;
  imageList: any[] = [];
  imageNameList: any[] = [];
  categories: any[] = [];
  brands: any[] = [];
  colors: any[] = [
    { name: 'Black', value: '#000'},
    { name: 'White', value: 'white'},
    { name: 'Silver', value: 'silver'},
    { name: 'Grey', value: 'grey'},
    { name: 'Red', value: 'red'},
  ]
  isVisibleFail = false;
  isVisibleSuccess = false;
  isLoading = false;
  isSubmit = false;

  get totalQuantity() { return this.form.get('totalQuantity')}
  get name() { return this.form.get('name') }
  get category() { return this.form.get('category') }
  get brand() { return this.form.get('brand') }
  get price() { return this.form.get('price') }
  get rom() { return this.form.get('price') }
  get description() { return this.form.get('description') }
  get discountPrice() { return this.form.get('discountPrice') }

  ngOnInit(): void {
    this.getData()
    this.initForm();
    this.route.params.subscribe((param : Params) => {
      this.id = param['id'];
      this.service.getDetailById(this.id as String).subscribe((res : any) => {
        this.product = res.data;
        const { name, price, description, category, brand, colors, ram, rom, totalQuantity } = res.data
        console.log(res.data);
        this.imageList = res.data.images.map((item:any) => {
          return `${API_URL}upload/${item}`
        })
        this.imageNameList = res.data.images
        this.form.patchValue({
          name: name,
          category: category._id,
          brand: brand._id,
          colors: colors.map((item : any) => {return { name: item.name, value: item.value }}),
          description,
          price,
          ram,
          rom,
          totalQuantity
         })
      });
    })
  }
  initForm = () => {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      colors: new FormControl([], Validators.required),
      rom: new FormControl(0, Validators.required),
      totalQuantity: new FormControl(0, Validators.required),
      ram: new FormControl(0, Validators.required),
      price: new FormControl(0, Validators.required),
    });
  }
  getData = () => {
    this.cateService.getCategoryList().subscribe((res : any) => {
      this.categories = res.categories;
    })
    this.brandService.getBrandList().subscribe((res : any) => {
      this.brands = res.brands
    })
  }
  onFileSelected = (event : any) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    const formData = new FormData();
    formData.append('file', event.target.files[0])
    reader.onload = (e : any) => {
      this.imageList.push(e.target.result)
      this.imageNameList.push(event.target.files[0].name)
      this.http.post(`${API_URL}upload`, formData).subscribe((res : any) => {
        console.log(res);
      })
    }
  }
  onDeleteImage = (i: any) => {
    console.log(i);
    this.imageList = this.imageList.filter((item, index) => index !== i)
    this.imageNameList = this.imageNameList.filter((item, index) => index !== i)
  }
  onSubmit = () => {
    this.service.editProduct({ ...this.form.value, images: this.imageNameList, _id: this.product._id}).subscribe((res : any) => {
      console.log(res);
      if(res.success === true) {
        this.modal.success({
          nzTitle: 'Thành công',
          nzContent: 'Đã cập nhật lại thông tin sản phẩm!',
          nzOnOk: () => {
            this.router.navigate(['/admin/product'])
          }
        })
      } else {
        this.modal.error({
          nzTitle: 'Thất bại',
          nzContent: 'Đã xảy ra lỗi, vui lòng thử lại sau'
        })
      }
    })
  }
}
