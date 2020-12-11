import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spend',
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.scss']
})
export class SpendComponent {

  // Doughnut
  public doughnutChartLabels: string[] = ['Travel', 'Rentals', 'Hotels', 'Wholesale', 'Fuel', 'Supplies', 'Dinning', 'Others'];
  public demodoughnutChartData: number[] = [30, 10, 15, 8, 15, 5, 12, 5];
  public doughnutChartType = 'doughnut';

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

}
