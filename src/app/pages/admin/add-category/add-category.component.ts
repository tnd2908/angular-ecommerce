import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/service/category.service';
import { UploadService } from 'src/service/upload.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  form!: FormGroup;
  image!: string;
  imageName!: string;
  isLoading = false;
  isVisibleSuccess = false;
  isVisibleFail = false
  constructor(private service: UploadService, private cateService: CategoryService) {}
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
      this.cateService.addCategory({...this.form.value, icon: this.imageName}).subscribe((res : any) => {
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
