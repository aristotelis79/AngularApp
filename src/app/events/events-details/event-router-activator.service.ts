import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { EventService } from '../../shared/event.service';

//Not in use
@Injectable({ providedIn: 'root' })
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const eventExist = !!this.eventService.getEvent(+route.params.id);

    if (!eventExist) {
      this.router.navigate(['404']);
    }
    return eventExist;
  }
}
