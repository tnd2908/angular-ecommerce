import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges, SimpleChanges, Input, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any
  userName!: string;
  isAdmin = window.location.pathname.startsWith('/admin');
  tokenUser: any
  constructor(private service:AuthService, private route: ActivatedRoute ) { }
  
  ngOnInit(): void {
    this.isAdmin = window.location.pathname.startsWith('/admin')
    this.service.getToken().subscribe((res: any) => {
      this.user = res;
      const tempName = res.fullName.split(' ')
      this.userName = tempName[tempName.length-1]
    })
    this.getToken()
  }

  getToken() {
    this.tokenUser = localStorage.getItem("accessToken")
    this.user = jwtDecode(this.tokenUser)    
    const tempName = this.user.fullName.split(' ')
      this.userName = tempName[tempName.length-1]
  }
  
  logOut() {
    localStorage.removeItem("accessToken")
    window.location.reload()
  }

}
