import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from './../../shared/index';

@Component({
  templateUrl: 'event-details.component.html',
  styles: [`
  .container {padding:0 20px;}
  .event-image {height: 100px;}
  a {cursor:pointer}
  `]
})

export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string;
  sortBy: string;

  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    // user resolver data
    this.route.data.forEach((data) => {
      this.event = data.event;
      //Important need to reset the state after change url
      this.initState();
    });

    //with http call throught rx
    // this.route.params.forEach((params: Params) => {
    //   //this do the call to http with rxjs
    //   // this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {
    //   // this.event = event;
    //   // this.initState();
    //   // });
    // });

    //static old
    //const id = this.route.snapshot.params.id; //snapshot is nor objervable
    //this.event = this.eventService.getEvent(+id);//The plus do it number
  }

  initState() {
    this.addMode = false;
    this.filterBy = 'all';
    this.sortBy = 'votes';
  }

  addSession(){
    this.addMode = true;
  }

  saveNewSession(session: ISession){
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id += nextId;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession(){
    this.addMode = false;
  }
}
