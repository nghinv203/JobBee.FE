import { TestBed } from '@angular/core/testing';

import { JobApplyService } from './job-apply.service';

describe('JobApplyService', () => {
  let service: JobApplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobApplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
