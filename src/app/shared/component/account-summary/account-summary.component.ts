import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss']
})

export class AccountSummaryComponent {

  @Input() accountSummary: any;

  constructor() { }

}
