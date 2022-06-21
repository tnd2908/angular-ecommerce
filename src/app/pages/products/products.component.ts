import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { API_URL } from 'src/app/utils/constant';
import { BrandService } from 'src/service/brand.service';
import { CartService } from 'src/service/cart.service';
import { CategoryService } from 'src/service/category.service';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private service: ProductService, private cateService: CategoryService, private brandService: BrandService, private cartService: CartService, private route: ActivatedRoute) { }
  productList: any = []
  categories: any = []
  brands: any = []
  url = API_URL
  sortOptions!: SelectItem[];
  categoryId! : any;
  sortOrder!: number;
  brandId! : any;
  sortField!: string;
  ngOnInit(): void {
    // this.service.getProductList().subscribe((res: any) => {
    //   if (res.success === true) {
    //     this.productList = res.data
    //   }
    // })
    this.getProduct()
    this.sortOptions = [
      { label: 'Từ giá cao đến thấp', value: '!price' },
      { label: 'Từ giá thấp đến cao', value: 'price' },
    ];
    this.getData()
    this.route.queryParams.subscribe((param : any) => {
      this.categoryId = param.category;
      this.brandId = param.brand
    })
  }
  getData = () => {
    this.cateService.getCategoryList().subscribe((res: any) => {
      this.categories = res.categories
    })
    this.brandService.getBrandList().subscribe((res: any) => {
      this.brands = res.brands
    })
  }
  getProduct = () => {
    window.scrollTo(0, 0);
    this.route.queryParams.subscribe((param : any) => {
      console.log(param);
      
      this.service.getProductList(param.category, param.brand).subscribe((res: any) => {
        if (res.success === true) {
          this.productList = res.data
        }
      })
    })
  }
  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
  addToCart = (product : any) => {
    this.cartService.addtoCart(product)
  }
  clear = () => {
    this.route.queryParams.subscribe((param : any) => {
      param.brand = ''
    })
  }
}
