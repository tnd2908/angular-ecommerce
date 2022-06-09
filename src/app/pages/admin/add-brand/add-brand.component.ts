import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrandService } from 'src/service/brand.service';
import { UploadService } from 'src/service/upload.service';
@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss'],
})
export class AddBrandComponent implements OnInit {
  form!: FormGroup;
  image!: string;
  imageName!: string;
  isLoading = false;
  isVisibleSuccess = false;
  isVisibleFail = false
  constructor(private service: UploadService, private brandService: BrandService) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }
  onFileSelected = (event: any) => {
    console.log(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e: any) => {
      this.image = e.target.result;
      this.imageName = event.target.files[0].name
      this.service.upload(event.target.files[0]).subscribe((res) => {
        console.log(res);
      });
    };
  };
  onSubmit = () => {
    if (this.form.valid && this.imageName !== '') {
      this.isLoading = true
      console.log(this.form.value);
      this.brandService.addBrand({...this.form.value, logo: this.imageName}).subscribe((res : any) => {
        this.isLoading = false;
        console.log(res);
        if (res.success === true) {
          this.form.reset();
          this.image = '';
          this.imageName = '';
          this.isVisibleSuccess = true;
        } else {
          this.isLoading = false;
          this.isVisibleFail = true;
        }
      })
    }
  };
}
