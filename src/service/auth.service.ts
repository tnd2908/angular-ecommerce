import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { API_URL } from 'src/app/utils/constant';

@Injectable(
    { providedIn: 'root' }
)
export class AuthService {
    constructor(private http: HttpClient) {}
    register = (data : any) => {
        return this.http.post(`${API_URL}auth/register`, data);
    }
    login = (data: any) => {
        return this.http.post(`${API_URL}auth/login`, data);
    }
}