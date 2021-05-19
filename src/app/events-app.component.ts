import { Component, OnInit } from "@angular/core";
import { AuthService } from "./user/auth.service";

@Component({
  selector: "app-events",
  template: `
    <app-navbar></app-navbar>
    <img src="/assets/images/basic-shield.png" />
    <router-outlet></router-outlet>
    <!-- <app-events-list #thumbnailChildReference ></app-events-list> 
      <button class="btn btn-lg" (click)="thumbnailChildReference.handleParentsAction('foo')">
        Button - {{thumbnailChildReference.childValue}}
      </button>
  <div>
    <p *ngIf="thumbnailChildReference">{{thumbnailChildReference.childValue}}</p>
  </div>-->
  `,
  styleUrls: ["./app.component.scss"]
})
export class EventsAppComponent implements OnInit {
  title = "angularApp";
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.checkAuthnticationStatus();
  }
}
