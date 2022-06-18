import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAdminRoute: boolean = false;
  constructor() { }
  ngOnInit(): void {    
    this.isAdminRoute = window.location.pathname.startsWith('/admin')
  }

}
