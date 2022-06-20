import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { API_URL } from 'src/app/utils/constant';
import { productList } from 'src/dummy/data';
import { IProduct } from 'src/interface/product/product';
import { ProductService } from 'src/service/product.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig, private service: ProductService, private modal: NzModalService) { }
  products!: any[];
  rate: number = 4;
  url = API_URL;
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getData()
  }
  showConfirm = (product : any) => {
    this.modal.confirm({
      nzTitle: 'Bạn có chắc muốn xoá ' + product.name +' không?',
      nzOnOk: () => {
        this.service.deleteProduct(product._id).subscribe((res : any) => {
          if (res.success === true) {
            this.modal.success({
              nzTitle: 'Thành công',
              nzContent: 'Đã xoá thành công sản phẩm ' + product.name
            })
            this.getData();
          } else {
            this.modal.error({
              nzTitle: 'Thất bại',
              nzContent: 'Đã xảy ra lỗi, vui lòng thử lại sau'
            })
          }
        });
      },
      nzOkType: 'primary',
      nzOkDanger: true,
      nzCancelText: 'Huỷ',
      nzOkText: 'Xác nhận'
    })
  }
  getData = () => {
    this.service.getAllProduct().subscribe((res: any) => {
      console.log(res);
      this.products = res.data;
    })
  }
}
