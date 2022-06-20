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
  Name!: string;
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
    const tempName = this.user.fullName.split(' ')
    var firstName = tempName[tempName.length-1] 
    var lastName = tempName[0]
    this.Name = firstName.slice(0,1) + lastName.slice(0,1);      
  }
  
}
