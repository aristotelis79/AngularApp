import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
   <app-navbar></app-navbar>
    <h1>{{title}}</h1>
    <img src = '/assets/images/basic-shield.png'/>
    <app-events-list #thumbnailChildReference ></app-events-list>
      <button class="btn btn-lg" (click)="thumbnailChildReference.handleParentsAction('foo')"> Button - {{thumbnailChildReference.childValue}}</button>
  <div>
    <p *ngIf="thumbnailChildReference">{{thumbnailChildReference.childValue}}</p>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class EventsAppComponent {
  title = 'angularApp';
}
