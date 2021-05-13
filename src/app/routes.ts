import { Routes } from '@angular/router';
import { Error404Component } from './errors/e404.component';
import { EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent} from './events/index';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: 'user', loadChildren: () => import ('./user/user.module').then(m => m.UserModule) }, // { path: 'user', loadChildren: ('./user/user.module#UserModule') },

  { path: '**', redirectTo: '/events', pathMatch: 'full' }
];
