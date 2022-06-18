import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any
  tokenUser: any

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getToken().subscribe((res: any) => {
      this.authService = res;
    })
    this.getToken()
  }

  getToken() {
    this.tokenUser = localStorage.getItem("accessToken")
    this.user = jwtDecode(this.tokenUser)
  }
}
