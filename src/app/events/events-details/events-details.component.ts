import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute, Params } from "@angular/router";
import { IEvent, ISession } from "../shared";

@Component({
  templateUrl: "./events-details.component.html",
  styleUrls: ["./events-details.component.scss"]
})
export class EventsDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = "all";
  sortBy: string = "votes";

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  addSession() {
    this.addMode = true;
  }

  cancelAddSession() {
    this.addMode = false;
  }

  saveNewSession(session: ISession) {
    const maxId = Math.max.apply(
      null,
      this.event.sessions.map(s => s.id)
    );
    session.id = maxId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  ngOnInit() {
    this.route.data.forEach(data => {
      this.event = data["event"]; //e
      this.addMode = false; //reset to initial value when I route to an other page of this component
    });

    // this.route.params.forEach((p: Params) => {
    //   //this code "reset" the state of component of his properties
    //   this.eventService.getEvent(+p["id"]).subscribe((e: IEvent) => {
    //     this.event = e;
    //     this.addMode = false; //reset to initial value when I route to an other page of this component
    //   });
    // });

    //this work only the first time besouse snapshot is like a static copy
    //this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }
}
