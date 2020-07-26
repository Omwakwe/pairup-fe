import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPairsComponent } from './student-pairs.component';

describe('StudentPairsComponent', () => {
  let component: StudentPairsComponent;
  let fixture: ComponentFixture<StudentPairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
