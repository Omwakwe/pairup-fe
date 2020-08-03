import { TestBed } from '@angular/core/testing';

import { AllCohortsService } from './all-cohorts.service';

describe('AllCohortsService', () => {
  let service: AllCohortsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCohortsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
