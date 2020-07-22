import { Directive, ElementRef, Input } from '@angular/core';
import { Quotes } from './quotes';

@Directive({
  selector: '[topQuote]'
})
export class TopQuoteDirective {
  @Input('topQuote') top;

  quote: Quotes;
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.border = 'solid 1px #fff';
    this.el.nativeElement.style.outline = 'none';
    this.el.nativeElement.style.boxShadow = '0 0 10px #fff';
  }

}