import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'event-details.component.html',
  styles: [`
  .container {padding:0 20px;}
  .event-image {height: 100px;}
  `]
})

export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.event = this.eventService.getEvent(+id);
  }
}
