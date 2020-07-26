import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PairHistoryComponent } from './pair-history.component';

describe('PairHistoryComponent', () => {
  let component: PairHistoryComponent;
  let fixture: ComponentFixture<PairHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PairHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
