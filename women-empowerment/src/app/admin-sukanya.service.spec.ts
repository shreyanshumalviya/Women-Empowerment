import { TestBed } from '@angular/core/testing';

import { AdminSukanyaService } from './admin-sukanya.service';

describe('AdminSukanyaService', () => {
  let service: AdminSukanyaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSukanyaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
