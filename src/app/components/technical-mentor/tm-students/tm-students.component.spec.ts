import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmStudentsComponent } from './tm-students.component';

describe('TmStudentsComponent', () => {
  let component: TmStudentsComponent;
  let fixture: ComponentFixture<TmStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
