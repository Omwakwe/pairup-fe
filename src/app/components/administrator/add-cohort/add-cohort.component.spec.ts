import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddCohortComponent } from './add-cohort.component';

describe('AddCohortComponent', () => {
  let component: AddCohortComponent;
  let fixture: ComponentFixture<AddCohortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCohortComponent ],
      imports:[ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCohortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
