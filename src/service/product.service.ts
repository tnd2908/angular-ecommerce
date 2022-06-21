import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/utils/constant';
import { productList } from 'src/dummy/data'

@Injectable(
    { providedIn: 'root' }
)
export class ProductService {
    constructor(private http: HttpClient) {}
    getProductList = (category? : any, brand? : any) => {
        // return productList.map((item) => {
        //     const star = Math.floor(Math.random() * (5 - 1) + 1)
        //     return { ...item, price: new Intl.NumberFormat().format(item.price), star }
        // });
        return this.http.get(`${API_URL}product?category=${category ? category : ''}&brand=${brand ? brand : ''}`);
    }
    getDetail = (name: String) => {
        return this.http.get(`${API_URL}product/detail/${name}`)
    }
    getDetailById = (id: String) => {
        return this.http.get(`${API_URL}product/${id}`)
    }
    addProduct = (data : any) => {
        return this.http.post(`${API_URL}product/add-new`, data);
    }
    editProduct = (data : any) => {
        return this.http.put(`${API_URL}product/${data._id}`, data)
    }
    deleteProduct = (id: any) => {
        return this.http.delete(`${API_URL}product/${id}`)
    }
    getProductBestSaling = () => {
        return this.http.get(`${API_URL}product/sale/best-saling`)
    }
    getAllProduct = () => {
        return this.http.get(`${API_URL}product/all`)
    }
}