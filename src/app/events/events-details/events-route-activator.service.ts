import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { EventService } from "../shared/event.service";

@Injectable({
  providedIn: "root"
})
export class EventsRouteActivatorService implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      this.router.navigate(["404"]);
    }
    const evenExist = this.eventService.getEvent(+route.params.id);
    if (!evenExist) {
      this.router.navigate(["404"]);
    }
    return true;
  }
}
