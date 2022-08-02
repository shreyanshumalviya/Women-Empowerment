import { TestBed } from '@angular/core/testing';

import { AdminAccomodationService } from './admin-accomodation.service';

describe('AdminAccomodationService', () => {
  let service: AdminAccomodationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAccomodationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
