import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
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
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }
}
