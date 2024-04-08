import { TestBed } from '@angular/core/testing';

import { SpiciesService } from './spicies.service';

describe('SpiciesService', () => {
  let service: SpiciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpiciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
