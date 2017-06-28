import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsLearnComponent } from './flashcards-learn.component';

describe('FlashcardsLearnComponent', () => {
  let component: FlashcardsLearnComponent;
  let fixture: ComponentFixture<FlashcardsLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashcardsLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardsLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
