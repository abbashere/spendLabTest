import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-recent-transaction',
  templateUrl: './recent-transaction.component.html',
  styleUrls: ['./recent-transaction.component.scss']
})

export class RecentTransactionComponent implements OnChanges {

  @Input() transaction: any;

  constructor() { }

  ngOnChanges(): void {
    // console.log(this.transaction);
  }

}
