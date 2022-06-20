import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js';
import { BillService } from 'src/service/bill.service';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill-layout.component.html',
  styleUrls: ['./bill-layout.component.scss']
})
export class BillLayoutComponent implements OnInit {

  bill: any = [];
  date = new Date();
  data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  chart: any = []
  products : any = []
  constructor(private service: ProductService) { 
    Chart.register(...registerables)
  }

  ngOnInit(): void {
    this.service.getProductBestSaling().subscribe((res : any) => {
      if(res.success === true) {
        console.log(res);
        this.products = res.data
        this.chart = new Chart('chart', {
          type: 'doughnut',
          data: {
            labels: res.data.map((item: any) => item.name),
            datasets: [{
              label: 'My First Dataset',
              data: res.data.map((item: any) => item.saled),
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'red',
                'green'
              ],
              hoverOffset: 4
            }]
          }
        })
      }
    })
  }
}
