import { TestBed } from '@angular/core/testing';

import { EmployerListService } from './employer-list.service';

describe('EmployerListService', () => {
  let service: EmployerListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployerListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
