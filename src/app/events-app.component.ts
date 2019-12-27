import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <h1>{{title}}</h1>
    <img src = '/assets/images/basic-shield.png'/>
    <events-list></events-list>
  `,
  styleUrls: ['./app.component.scss']
})
export class EventsAppComponent {
  title = 'angularApp';
}
