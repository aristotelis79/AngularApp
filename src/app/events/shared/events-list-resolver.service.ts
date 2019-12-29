import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EventService } from './event.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any> {


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //not use subscribe because we need the observable not the subscrition after done
    return this.eventService.getEvents().pipe(map(e => e));
  }

  constructor(private eventService: EventService) { }
}
