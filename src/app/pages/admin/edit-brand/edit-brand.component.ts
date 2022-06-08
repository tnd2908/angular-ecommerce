import { ActivatedRoute, Params } from '@angular/router';
import { BrandService } from 'src/service/brand.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBrand } from 'src/interface/brand/brand';
@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.scss'],
})
export class EditBrandComponent implements OnInit {
  form!: FormGroup;
  imageList: any[] = [];
  id!: string;
  brand!: IBrand;

  constructor(private service: BrandService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.editForm();
  }

  editForm() {
    this.route.params.subscribe((param: Params) => {
      this.id = param['id'];
      this.brand = this.service.getBrandDetail(this.id)!;
    });
    this.form = new FormGroup({
      name: new FormControl(this.brand.name, Validators.required),
    });
  }
  onFileSelected = (event: any) => {
    console.log(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e: any) => {
      this.imageList.push(e.target.result);
    };
  };
  onSubmit = () => {
    console.log(this.form.value);
  };
}
