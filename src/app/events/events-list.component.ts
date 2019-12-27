import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastService } from '../common/toast.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
  // styles: [`
  //         .event-list{ color : pink;}
  // `],
})
export class EventsListComponent implements OnInit {

  childValue = 'some child value in parent';
  events = {};
  constructor(private eventService: EventService, private toastService: ToastService) {
  }

  handleEventClicked(name: string) {
    this.toastService.success(`${name} from servcie`);
  }

  handleParentsAction(name: string) {
    alert(`clicked ${name} from parent`);
  }
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

}
