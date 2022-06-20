import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PrimeNGConfig } from 'primeng/api';
import { API_URL } from 'src/app/utils/constant';
import { BrandService } from 'src/service/brand.service';
import { CategoryService } from 'src/service/category.service';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class AdminUserComponent implements OnInit {
  dateCreated!: String
  index!: number
  constructor(
    private primengConfig: PrimeNGConfig,
    private service: ProductService,
    private modal: NzModalService,
    private http: HttpClient
    ) { }
  users!: any[];
  rate: number = 4;
  url = API_URL;
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getData()
  }
  getData = () => {
    this.http.get(`${API_URL}auth/all`).subscribe((res: any) => {
      console.log(res.users);
      this.users = res.users;
      this.users.map((user, index) => {
      this.dateCreated = user.createAt.slice(0, user.createAt.indexOf("T"))
      console.log(index + 1);
      this.index = index + 1
      console.log(this.index);
      })
      
    })
  }
}
