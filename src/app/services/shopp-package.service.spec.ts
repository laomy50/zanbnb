import { TestBed } from '@angular/core/testing';

import { ShoppPackageService } from './shopp-package.service';

describe('ShoppPackageService', () => {
  let service: ShoppPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
