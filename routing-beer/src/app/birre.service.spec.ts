import { TestBed } from '@angular/core/testing';

import { BirreService } from './birre.service';

describe('BirreService', () => {
  let service: BirreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BirreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
