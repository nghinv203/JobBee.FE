import { TestBed } from '@angular/core/testing';

import { JobAlertService } from './job-alert.service';

describe('JobAlertService', () => {
  let service: JobAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
