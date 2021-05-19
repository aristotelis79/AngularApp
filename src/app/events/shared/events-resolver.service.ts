import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { EventService } from "./event.service";

@Injectable({
  providedIn: "root"
})
export class EventResolverService implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot, RouterStateSnapshot) {
    return this.eventService.getEvent(route.params["id"]);
  }
}
