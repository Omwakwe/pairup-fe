import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMentorsComponent } from './all-mentors.component';

describe('AllMentorsComponent', () => {
  let component: AllMentorsComponent;
  let fixture: ComponentFixture<AllMentorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMentorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
