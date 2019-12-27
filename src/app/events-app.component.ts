import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: '<h1>{{title}}<h1>',
  styleUrls: ['./app.component.sass']
})
export class EventsAppComponent {
  title = 'angularApp';
}
