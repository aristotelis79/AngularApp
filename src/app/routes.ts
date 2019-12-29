import { Routes } from "@angular/router";
import { Error404Component } from "./errors/error404.component";
import { EventsRouteActivatorService } from "./events/events-details/events-route-activator.service";
import { EventsListResolverService } from "./events/shared/events-list-resolver.service";
import {
  EventsListComponent,
  EventsDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent
} from "./events/index";

export const appRoutes: Routes = [
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"]
  },
  {
    path: "events",
    component: EventsListComponent,
    resolve: { events: EventsListResolverService }
  },
  {
    path: "events/:id",
    component: EventsDetailsComponent,
    canActivate: [EventsRouteActivatorService]
  },
  { path: "events/session/new", component: CreateSessionComponent },
  { path: "", redirectTo: "/events", pathMatch: "full" },
  { path: "404", component: Error404Component },
  { path: "user", loadChildren: "./user/user.module#UserModule" },
  { path: "**", redirectTo: "/events", pathMatch: "full" }
];
