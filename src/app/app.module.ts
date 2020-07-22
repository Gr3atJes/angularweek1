import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { QuoteRevealComponent } from './quote-reveal/quote-reveal.component';
import { TopQuoteDirective } from './top-quote.directive';
import { LastPostedPipe } from './last-posted.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
>>>>>>> 9dc9aa19d2b9f2493e6701f65513865f4e6cdd14

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PageHeaderComponent,
    PageFooterComponent,
    QuoteDisplayComponent,
    QuoteRevealComponent,
    TopQuoteDirective,
    LastPostedPipe,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
