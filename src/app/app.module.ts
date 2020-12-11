import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { HomeComponent } from './home/home.component';
import { AccountSummaryComponent } from './shared/component/account-summary/account-summary.component';
import { RecentTransactionComponent } from './shared/component/recent-transaction/recent-transaction.component';
import { PaymentHistoryComponent } from './shared/component/payment-history/payment-history.component';
import { SpendComponent } from './shared/component/spend/spend.component';
import { ChartsModule } from 'ng2-charts';
import { DateRangeModule } from './shared/component/date-range/date-range.module';

@NgModule({
  declarations: [
    AppComponent,
    NavSidebarComponent,
    HomeComponent,
    AccountSummaryComponent,
    RecentTransactionComponent,
    PaymentHistoryComponent,
    SpendComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    DateRangeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
