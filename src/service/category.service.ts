import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/utils/constant';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(private http: HttpClient) {}
  getCategoryList = () => {
    return this.http.get(`${API_URL}category`)
  };
  getCategoryDetail = (id: string) => {
    return this.http.get(`${API_URL}category/${id}`)
  };
  addCategory = (data: any) => {
    return this.http.post(`${API_URL}category`, data);
  }
}
