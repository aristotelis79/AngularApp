import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';
import { IEvent } from './../shared/index';

@Component({
  // selector: 'events-list', not need because of router
  templateUrl: 'events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(
    private eventService: EventService,
    // private toastr: ToastrService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // Not need we have resolver and do above
    // this.eventService.getEvents().subscribe((events) => { this.events = events;});
    this.events = this.route.snapshot.data.events;
  }

  handleEventClicked(data: any) {
    console.log('received from child', data);
  }

  // handleThumbnailClick(eventName) {
  //   this.toastr.success(eventName);
  // }
}
