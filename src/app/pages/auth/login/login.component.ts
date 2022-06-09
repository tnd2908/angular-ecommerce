import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
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
  onSubmit = () => {
    this.authService.login(this.form.value).subscribe((res : any) => {
      if (res.success === true) {
        console.log(res);
        AppComponent.user = { fullName: 'hello'}
        console.log(AppComponent.user);
        localStorage.setItem('accessToken', res.accessToken)
        this.router.navigate(['/'])
      } else {
        this.isVisibleFail = true;
      }
    })
  }
}
