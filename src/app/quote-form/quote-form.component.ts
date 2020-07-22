import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  constructor() { }

  showForm = false;
  hideForm = true;

  newQuote = new Quotes(0, '', '', '', new Date());

  @Output('addQuote') addQuote = new EventEmitter<Quotes>();

  quoteForm: FormGroup;

  ngOnInit() {
  }

  revealForm() {
    this.showForm = !this.showForm;
    this.hideForm = !this.hideForm;
  }
  submitQuote() {
    this.addQuote.emit(this.newQuote);
    // resets form
    this.newQuote = new Quotes(0, '', '', '', new Date());
    alert('Quote posted, you can view it on the carousel');
  }
}