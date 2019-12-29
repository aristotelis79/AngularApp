import { TestBed } from '@angular/core/testing';

import { EventsRouteActivatorService } from './events-route-activator.service';

describe('EventsRouteActivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsRouteActivatorService = TestBed.get(EventsRouteActivatorService);
    expect(service).toBeTruthy();
  });
});
