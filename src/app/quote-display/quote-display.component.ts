import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'main-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {

  constructor() { }

  displayQuotes: Quotes [] = [
    new Quotes (0, 'Brett Conti', 'Karl Conrad', 'The way to get started is to quit talking and begin doing', new Date (2018, 2, 2)),
    new Quotes (1, 'Marques Brownlee', 'Loveliveserve', 'Do not waste, your life, living for someone else, because you will always be unhappy.', new Date (2012, 2, 2))
  ];

  img = 'https://picsum.photos/id/339/1440/500';

  onMore = true;
  onLess = false;

  ngOnInit() {
  }


  toggleQuote(index) {
    this.displayQuotes[index].showQuoteInFull = !this.displayQuotes[index].showQuoteInFull;
    this.onMore = !this.onMore;
    this.onLess = !this.onLess;
  }

  deleteSelectedQuote(toDelete, index) {
    if (this.displayQuotes.length > 1) {
      if (toDelete) {
        const confirmation = confirm('The action you are about to perform cannot be undone...continue?');
        if (confirmation == true) {
          this.displayQuotes.splice(index, 1);
        }
      }
    } else {
      alert('\'You cannot delete another quote, another option is to add! instead...\' -Anonymous');
    }
  }

  addNewQuote(displayQuote) {
    const quotesLength = this.displayQuotes.length;
    displayQuote.id = quotesLength + 1;
    displayQuote.postDate = new Date(displayQuote.postDate);
    this.displayQuotes.push(displayQuote);
  }

}