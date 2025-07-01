import { TestBed } from '@angular/core/testing';

import { SaveJobService } from './save-job.service';

describe('SaveJobService', () => {
  let service: SaveJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
