import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventsDetailsComponent,
  CreateEventComponent,
  checkDirtyState
} from "./events/index";
import { EventsAppComponent } from "./events-app.component";
import { Error404Component } from "./errors/error404.component";
import { appRoutes } from "./routes";
import { NavbarComponent } from "./nav/navbar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreateSessionComponent } from './events/events-details/create-session.component';
import { SessionListComponent } from './events/events-details/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';

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
    NavbarComponent,
    EventsDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent
  ],
  providers: [
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
