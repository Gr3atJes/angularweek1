import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteRevealComponent } from './quote-reveal.component';

describe('QuoteRevealComponent', () => {
  let component: QuoteRevealComponent;
  let fixture: ComponentFixture<QuoteRevealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteRevealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteRevealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
