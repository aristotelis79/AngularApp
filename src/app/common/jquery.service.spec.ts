import { TestBed } from '@angular/core/testing';

import { JqueryService } from './jquery.service';

describe('JqueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JqueryService = TestBed.get(JqueryService);
    expect(service).toBeTruthy();
  });
});
