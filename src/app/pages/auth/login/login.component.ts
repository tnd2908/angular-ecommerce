import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/service/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private token: AuthService,
    private router: Router,
    private http: HttpClient,
    ) { }
  form!: FormGroup;
  isVisibleFail = false;
  isLoading = false;
  ngOnInit(): void {
    // if (localStorage.getItem('accessToken')) {
    //   this.router.navigate(['/'])
    // }
    this.initForm()
  }
  initForm = () => {
    this.form = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }
  submit(): void {
    this.token.login(this.form.getRawValue()).subscribe(
      (res: any) => {
        if (res.success == true) {
          this.token.setToken(res.accessToken)
          this.router.navigate(['/']);
        } else if (res.success == false) {
          console.log(res.message);
          alert(res.message)
        }
      },err => {
        console.log(err);
      }
    )
  }
}
