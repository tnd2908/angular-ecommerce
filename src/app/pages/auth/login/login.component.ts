import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/service/auth.service';
import { HttpClient } from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tokenUser: any
  user: any

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient,
    private modal: NzModalService
    ) { }
  form!: FormGroup;
  isVisibleFail = false;
  isLoading = false;
  ngOnInit(): void {
    if (localStorage.getItem('accessToken')) {
      this.router.navigate(['/'])
    }
    this.initForm()
  }
  initForm = () => {
    this.form = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }

  getToken() {
    this.tokenUser = localStorage.getItem("accessToken")
    this.user = jwtDecode(this.tokenUser)
  }
  submit(): void {
    this.authService.login(this.form.getRawValue()).subscribe(
      (res: any) => {
        if (res.success === true) {
          this.authService.setToken(res.accessToken)
          this.authService.getToken().subscribe((res: any) => {
            this.user = res;
          })
          this.getToken();
          switch(this.user.role) {
            case "ADMIN":
              this.router.navigate(['/admin'])
              break;
            case "USER":
              this.router.navigate(['/'])
              break;
          }
        } else {
          console.log(res);
          this.modal.error({
            nzTitle: 'Đăng nhập thất bại',
            nzContent: 'Sai thông tin tài khoản, vui lòng kiểm tra lại email hoặc password'
          })
        }
      },err => {
        console.log(err);
      }
    )
  }
}
