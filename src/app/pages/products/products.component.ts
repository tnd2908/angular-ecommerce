import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { API_URL } from 'src/app/utils/constant';
import { BrandService } from 'src/service/brand.service';
import { CategoryService } from 'src/service/category.service';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private service : ProductService, private cateService: CategoryService, private brandService: BrandService) { }
  productList: any = []
  categories : any = []
  brands: any = []
  url = API_URL
  sortOptions!: SelectItem[];

    sortOrder!: number;

    sortField!: string;
  ngOnInit(): void {
    this.service.getProductList().subscribe((res : any) => {
      if(res.success === true) {
        this.productList = res.data
      }
    })
    this.sortOptions = [
      {label: 'Từ giá cao đến thấp', value: '!price'},
      {label: 'Từ giá thấp đến cao', value: 'price'},
      {label: 'Mặc định', value: 'null'}
  ];
    this.getData()

  }
  getData = () => {
    this.cateService.getCategoryList().subscribe((res : any) => {
      this.categories = res.categories
    })
    this.brandService.getBrandList().subscribe((res : any) => {      
      this.brands = res.brands
    })
  }
  onSortChange(event : any) {
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
}
