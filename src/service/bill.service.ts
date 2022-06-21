import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/utils/constant';

@Injectable({ providedIn: 'root' })
export class BillService {
  constructor(private http: HttpClient) {}
  addBill = (bill : any) => {
    return this.http.post(`${API_URL}bill/add`, bill)
  };
  getBill = () => {
    return this.http.get(`${API_URL}bill`)
  }
  getHistory = (id: any) => {
    return this.http.get(`${API_URL}auth/history/${id}`)
  }
}
