import { Component, OnInit } from "@angular/core";
import { AuthService } from "../user/auth.service";
import { ISession, EventService } from "../events";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  searchTerm: string = "";
  foundSessions: any;

  constructor(
    public authService: AuthService,
    private eventService: EventService
  ) {}

  ngOnInit() {}

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(s => {
      this.foundSessions = s;
    });
  }
}
