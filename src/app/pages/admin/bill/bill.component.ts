import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart, registerables } from 'node_modules/chart.js';
import { BillService } from 'src/service/bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

  bill: any = [];
  date = new Date();

  chart: any = []
  constructor(private service: BillService, private route: ActivatedRoute) {
    Chart.register(...registerables)
  }

  ngOnInit(): void {
    this.getData()
  }
  getData = () => {
    this.service.getBill().subscribe((res: any) => {
      if (res.success === true) {
        this.bill = res.data.map((item: any) => {
          if (item.status === 'Completed') {
            return { ...item, status: 'Đã thanh toán', color: 'green' }
          }
        })
      }
    })
  }
}
