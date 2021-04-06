import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: 'event-thumbnail.component.html',
  styles: [`
  .thumbnail {min-height: 240px}
  .pad-left { margin-left: 10px}
  .well div {color: #bbb;}
  .test-btn {margin:0;}
  .green {color: lightgreen !important;}
  .bold {font-weight:bold;}
  .underline{ text-decoration: underline;}
  `]
})

export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  referenceFromParentProperty: any = "Child property value to Parent";

  handleClickMe() {
    this.eventClick.emit(this.event);
  }

  callFromParent() {
    console.log('call from parent');
  }

  getStartTimeClass() {
    const isNormalStart = this.event && this.event.time === '9:00 am';
    return { bold: !isNormalStart };
  }

  getStartTimeClass2() {
    if (this.event && this.event.time !== '9:00 am') {
      return ['bold', 'test'];
    }
    return [];
  }

  getStartTimeStyle2(): any {
    if (this.event && this.event.time !== '9:00 am') {
      return { color: 'lightgreen', 'text-decoration': 'normal' };
    }
    return {};
  }
}
