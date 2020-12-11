import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss']
})
export class PaymentHistoryComponent implements OnChanges {

  @Input() payment: any;

  constructor() { }

  ngOnChanges(): void {
    // console.log(this.payment);
  }

}
