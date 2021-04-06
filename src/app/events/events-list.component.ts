import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { EventService } from '../shared/event.service';

@Component({
  //selector: 'events-list', not need because of router
  templateUrl: 'events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleEventClicked(data) {
    console.log('received from child', data);
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
