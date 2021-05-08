import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/events-details/event-details.component';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/e404.component';
import { EventRouteActivator } from './events/events-details/event-router-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { ProfileComponent } from './user/profile.component';

@NgModule({
  imports: [
    BrowserModule,
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
    ProfileComponent
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
     {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
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
