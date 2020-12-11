import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DateRangeComponent } from './date-range.component';

@NgModule({
  imports: [BrowserModule, NgbModule, FormsModule],
  declarations: [DateRangeComponent],
  exports: [DateRangeComponent],
  bootstrap: [DateRangeComponent]
})
export class DateRangeModule {}
