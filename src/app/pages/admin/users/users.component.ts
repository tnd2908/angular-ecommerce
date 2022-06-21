import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/app/utils/constant';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient) { }
  users: any = []
  ngOnInit(): void {
    this.http.get(`${API_URL}auth/all`).subscribe((res : any) => {
      this.users = res.users.filter((item : any) => item.role !== 'ADMIN')
      console.log(res);
      
    })
  }

}
