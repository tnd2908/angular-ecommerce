import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/service/auth.service';
import { BillService } from 'src/service/bill.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private service: AuthService, private billService : BillService) { }
  user: any
  token: any
  history: any = []
  ngOnInit(): void {
    if (localStorage.getItem('accessToken')) {
      this.service.getToken().subscribe((res: any) => {
        this.token = localStorage.getItem('accessToken')
        this.user = jwtDecode(this.token)
        this.billService.getHistory(this.user.userId).subscribe((response : any) => {
          this.history = response.data.map((item: any) => {
            if (item.status === 'Completed') {
              return { ...item, status: 'Đã thanh toán', color: 'green' }
            }
          })
        })
      })
    }
  }

}
