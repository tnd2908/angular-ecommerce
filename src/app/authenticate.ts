import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { OnInit } from "@angular/core";
import { AuthService } from "src/service/auth.service";
import jwtDecode from 'jwt-decode';

@Injectable ({
    providedIn: 'root'
})

export class hasAuthGuard implements CanActivate {
    tokenUser: any
    tempUser = [];
    constructor(private authService:AuthService, private router: Router ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        this.tokenUser = localStorage.getItem("accessToken")
        const isAuthorized = this.tokenUser  
        if (isAuthorized) {
            return true
        } else {
            this.router.navigate(['/login'])
            return false
        }
    }


}