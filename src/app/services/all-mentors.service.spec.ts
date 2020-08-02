import { TestBed } from '@angular/core/testing';

import { AllMentorsService } from './all-mentors.service';

describe('AllMentorsService', () => {
  let service: AllMentorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllMentorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
