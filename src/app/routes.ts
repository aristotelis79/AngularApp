import { Routes } from '@angular/router';
import { Error404Component } from './errors/e404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/events-details/event-details.component';
import { EventRouteActivator } from './events/events-details/event-router-activator.service';
import { EventsListComponent } from './events/events-list.component';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];
