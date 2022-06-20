import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { OnInit } from "@angular/core";
import { AuthService } from "src/service/auth.service";
import jwtDecode from 'jwt-decode';

@Injectable ({
    providedIn: 'root'
})

export class hasRoleGuard implements CanActivate {
    user: any
    tokenUser: any

    constructor(private authService:AuthService, private router: Router ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        this.authService.getToken().subscribe((res: any) => {
            this.user = res;
        })
        this.tokenUser = localStorage.getItem("accessToken")
        this.user = jwtDecode(this.tokenUser)
        const isAuthorized = this.user.role.includes("ADMIN")
        if (!isAuthorized) {
            console.log("vo con cac");
            window.localStorage.removeItem("accessToken");
            this.router.navigate(['/login'])
        }
        
        return isAuthorized
    }


}