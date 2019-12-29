import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared/event.service";

@Component({
  selector: "app-create-event",
  templateUrl: "./create-event.component.html",
  styleUrls: ["./create-event.component.scss"]
})
export class CreateEventComponent implements OnInit {
  isNotSaved: boolean = true;
  newEventForm: any;

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {}

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isNotSaved = false;
    this.router.navigate(["/events"]);
  }

  cancel() {
    this.router.navigate(["/events"]);
  }
}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isNotSaved) return window.confirm("Are you sure");

  return true;
}
