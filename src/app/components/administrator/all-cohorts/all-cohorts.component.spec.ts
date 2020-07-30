import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCohortsComponent } from './all-cohorts.component';

describe('AllCohortsComponent', () => {
  let component: AllCohortsComponent;
  let fixture: ComponentFixture<AllCohortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCohortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCohortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
