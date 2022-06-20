import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import jwtDecode from 'jwt-decode';
import { FormBuilder, FormGroup } from '@angular/forms';
import { API_URL } from 'src/app/utils/constant';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  user: any
  tokenUser: any
  form!: FormGroup;
  public cartItems: any = [];
  url = API_URL
  public total: number = 0;

  constructor(
    private authService: AuthService, 
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.authService.getToken().subscribe((res: any) => {
      this.user = res;
    })
    this.getToken();
    this.form = this.formBuilder.group({
      fullName: this.user.fullName,
      phone: this.user.phone,
      password: ''
    })
    this.getCart();
  }
  getCart = () => {
    this.cartItems = this.cartService.getProducts();
    this.total = this.cartService.getTotalPrice();
  }
  getToken() {
    this.tokenUser = localStorage.getItem("accessToken")
    this.user = jwtDecode(this.tokenUser)
  }

  submit(): void {
    this.http.put<any>(`${API_URL}auth/update/information/${this.user.userId}`, this.form.getRawValue())
    .subscribe((res: any) => {
      console.log(res)
      if (res.success == true){
        alert('Cập nhật thông tin thành công')
        localStorage.removeItem("accessToken");
        this.refreshToken();
        window.location.reload();
      } else {
        console.log('else',res);
        alert(res.message)
      }
    },(err: any) => console.log('error',err))
  }

  refreshToken(): void {
    this.http.get(`${API_URL}auth/refresh/${this.user.userId}`).subscribe(
      (res: any) => {
        console.log(res.refreshToken);
        
        this.authService.setToken(res.refreshToken)
      }
    )
  }
}
