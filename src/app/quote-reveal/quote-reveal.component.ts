import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'quote-reveal',
  templateUrl: './quote-reveal.component.html',
  styleUrls: ['./quote-reveal.component.css']
})
export class QuoteRevealComponent implements OnInit {

  constructor() { }

  @Input('fullQuote') displayQuote: Quotes;
  @Output('get-rid') deleteNow = new EventEmitter ();

  ngOnInit() {
  }

  deleteQuote(toDelete: boolean) {
    this.deleteNow.emit(toDelete);
  }

  onLike() {
    this.displayQuote.likeCount++;
  }

  onDislike() {
    this.displayQuote.dislikeCount++;
  }

}