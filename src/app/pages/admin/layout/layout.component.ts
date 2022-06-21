import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  win = window;
  constructor() { }
  ngOnInit(): void {
    console.log(window.location.pathname);
    
  }

  logout() {
    window.localStorage.removeItem("accessToken")
  }
}
