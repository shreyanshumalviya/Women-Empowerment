import { TestBed } from '@angular/core/testing';

import { NgoService } from './ngo.service';

describe('NgoLoginService', () => {
  let service: NgoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
