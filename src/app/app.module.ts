import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, PreloadAllModules } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventsDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  checkDirtyState,
  DurationPipe,
  UpvoteComponent,
  LocationValidatorDirective
} from "./events/index";
import { EventsAppComponent } from "./events-app.component";
import { Error404Component } from "./errors/error404.component";
import { NavbarComponent } from "./nav/navbar.component";
import { appRoutes } from "./routes";

import {
  CollapsibleWellComponent,
  TOASTR_TOKEN,
  IToastr,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective
} from "./common/index";
let toastr: IToastr = window["toastr"];
let jQuery = window["$"];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    //RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}), for preload modules
    HttpClientModule
  ],
  declarations: [
    UpvoteComponent,
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
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    LocationValidatorDirective
  ],
  providers: [
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
