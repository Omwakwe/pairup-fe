import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalMentorComponent } from './technical-mentor.component';

describe('TechnicalMentorComponent', () => {
  let component: TechnicalMentorComponent;
  let fixture: ComponentFixture<TechnicalMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
