import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data-service';

export interface IAccountSummaryType {
  'available-balance': string;
  'forword-balance': string;
  'credit-balance': string;
  'spending-plus-adjustment': string;
  'rewards-point': string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  accountSummaryData: any = [];
  payment: any = [];
  recentTransaction: any = [];

  constructor(
    private dataService: DataService
  ) {
    this.dataService.getMockJSON().subscribe(data => {
      this.accountSummaryData = data['account-summary'];
      this.payment = data.payment;
      this.recentTransaction = data['recent-transaction'];
    });
  }

  ngOnInit(): void {
  }

}
