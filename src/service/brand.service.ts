import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/utils/constant';

@Injectable({ providedIn: 'root' })
export class BrandService {
  constructor(private http: HttpClient) {}
  getBrandList = () => {
    return this.http.get(`${API_URL}brand`)
  };

  getBrandDetail = (id: string) => {
    return this.http.get(`${API_URL}brand/${id}`);
  };

  addBrand = (data: any) => {
    return this.http.post(`${API_URL}brand`, data)
  }
}
