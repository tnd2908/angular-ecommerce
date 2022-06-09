import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isLoading = false;
  isSubmit = false;
  isVisibleSuccess = false;
  isVisibleFail = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm = () => {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/)]),
      fullName: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern(/(0[3|5|7|8|9])+([0-9]{8})\b/)])
    })
  }
  get email() { return this.form.get('email') }
  get password() { return this.form.get('password') }
  get phone() { return this.form.get('phone') }
  get fullName() { return this.form.get('fullName') }
  onSubmit = () => {
    this.isSubmit = true;
    if (this.form.valid) {
      this.isLoading = true;
      this.authService.register(this.form.value).subscribe((res : any) => {
        if (res.success === true) {
          this.isVisibleSuccess = true;
          console.log(res);
        } else {
          this.isVisibleFail = true
          console.log(res);
        }
        this.isLoading = false;
      })
    }
  }
}
