import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { TOASTR_TOKEN } from './common/toastr.service';
import { appRoutes } from './routes';
import { Error404Component } from './errors/e404.component';
import { EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  SessionListComponent,
  DurationPipe  } from './events/index';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { CreateSessionComponent } from './events/events-details/create-session.component';

/// global Toastr
declare let toastr;
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers: [
    EventService,
    EventRouteActivator, 
    // or same as EventRouteActivator {provide: EventRouteActivator, useClass: EventRouteActivator}
    EventListResolver,
    AuthService,
    {
       provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState 
    },
    {
       provide: TOASTR_TOKEN, 
       useValue: toastr 
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(componet: CreateEventComponent){
  if (componet.isDirty) {
    return window.confirm('You have not saved this event, do you really want to leave');
  }

  return !componet.isDirty;
}
