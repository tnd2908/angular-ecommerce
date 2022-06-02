import { Component, OnInit } from '@angular/core';

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
