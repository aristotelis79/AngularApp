import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventsDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  checkDirtyState,
  DurationPipe
} from "./events/index";
import { EventsAppComponent } from "./events-app.component";
import { Error404Component } from "./errors/error404.component";
import { appRoutes } from "./routes";
import { NavbarComponent } from "./nav/navbar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CollapsibleWellComponent } from "./common/collapsible-well.component";

import { TOASTR_TOKEN, IToastr } from "./common/toast.service";
declare let toastr: IToastr;

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
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers: [
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
