import { TestBed } from '@angular/core/testing';

import { DemoReaderService } from './demo-reader.service';

describe('ParseDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoReaderService = TestBed.get(DemoReaderService);
    expect(service).toBeTruthy();
  });
});
