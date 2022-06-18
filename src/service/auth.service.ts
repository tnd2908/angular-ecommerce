import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { API_URL } from 'src/app/utils/constant';
import { BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable(
    { providedIn: 'root' }
)
export class AuthService {
    tokenUser: any 
    // public User = jwtDecode(this.tokenUser)
    userObserver: any = new BehaviorSubject<any>({})
    user: any
    constructor(private http: HttpClient) {}
    register = (data : any) => {
        return this.http.post(`${API_URL}auth/register`, data);
    }
    login = (data: any) => {
        return this.http.post(`${API_URL}auth/login`, data);
    }
    setToken (data: any) {
        localStorage.setItem("accessToken", data);
        this.tokenUser = localStorage.getItem("accessToken")
        this.user = jwtDecode(this.tokenUser)
        this.userObserver.next(this.user)
        console.log(this.userObserver);
    }

    getToken(): any {
        return this.userObserver.asObservable();
    };

    refreshToken(data: any) {
        localStorage.removeItem("accessToken");
        localStorage.setItem("accessToken", data);
        this.tokenUser = localStorage.getItem("accessToken")
        this.user = jwtDecode(this.tokenUser)
        this.userObserver.next(this.user)
        console.log(this.userObserver)
    }
}