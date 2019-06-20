import { TestBed } from '@angular/core/testing';

import { FaceitService } from './faceit.service';

describe('FaceitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaceitService = TestBed.get(FaceitService);
    expect(service).toBeTruthy();
  });
});
