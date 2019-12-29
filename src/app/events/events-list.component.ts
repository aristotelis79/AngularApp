import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastService } from "../common/toast.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared";

@Component({
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.scss"]
  // styles: [`
  //         .event-list{ color : pink;}
  // `],
})
export class EventsListComponent implements OnInit {
  childValue = "some child value in parent";
  events: IEvent;
  constructor(
    // private eventService: EventService,
    private toastService: ToastService,
    private route: ActivatedRoute
  ) {}

  handleEventClicked(name: string) {
    this.toastService.success(`${name} from servcie`);
  }

  handleParentsAction(name: string) {
    alert(`clicked ${name} from parent`);
  }
  ngOnInit() {
    //not need because of resolver
    // this.eventService.getEvents().subscribe(e => {
    //   this.events = e;
    // });
    this.events = this.route.snapshot.data["events"];
  }
}
