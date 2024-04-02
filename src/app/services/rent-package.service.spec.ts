import { TestBed } from '@angular/core/testing';

import { RentPackageService } from './rent-package.service';

describe('RentPackageService', () => {
  let service: RentPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
