import { TestBed } from '@angular/core/testing';

import { ParseDemoService } from './parse-demo.service';

describe('ParseDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParseDemoService = TestBed.get(ParseDemoService);
    expect(service).toBeTruthy();
  });
});
