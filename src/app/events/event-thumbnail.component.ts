import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss'],
  styles: [`
    .pad-left { margin-left: 10px; }
    .well div { color: red; }
  `]
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  constructor() { }

  handleClickMe() {
    this.eventClick.emit(this.event.name);
  }

  ngOnInit() {
  }

  getStartTimeClass() {
    if (this.event && this.event.time === '10:00 am') {
      return ['bold', 'yellow'];
    }
    if (this.event && this.event.time === '8:00 am') {
      return ['bold', 'green'];
    }
    return [];
  }
  getStartTimeStyle(): any {
    if (this.event && this.event.time === '10:00 am') {
      return { color: 'green', 'font-weight': 'bold' };
    }
    if (this.event && this.event.time === '8:00 am') {
      return { color: 'yellow', 'font-weight': 'bold' };
    }
    return {};
  }
}
