import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
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
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator} from './events/index';
import {
  TOASTR_TOKEN,
  JQ_TOKEN,
  CollapsibleWellComponent,
  IToastr,
  SimpleModalComponent,
  ModalTriggerDirective } from './common/index';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/events-details/create-session.component';

/// global Toastr
declare let toastr: IToastr; // = window['$'];
const jQuery  = window['$'];

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
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  providers: [
    EventService,
    EventRouteActivator,
    // or same as EventRouteActivator {provide: EventRouteActivator, useClass: EventRouteActivator}
    EventListResolver,
    VoterService,
    AuthService,
    {
       provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    {
       provide: TOASTR_TOKEN,
       useValue: toastr
    },
    {
       provide: JQ_TOKEN,
       useValue: jQuery
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
