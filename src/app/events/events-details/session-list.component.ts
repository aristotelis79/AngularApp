import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ISession } from "../shared/index";

@Component({
  selector: "app-session-list",
  templateUrl: "./session-list.component.html",
  styleUrls: ["./session-list.component.scss"]
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.sessions) return;
    this.visibleSessions = this.filterSessions(this.filterBy);
    this.sortBy === "name"
      ? this.visibleSessions.sort(sortByNameAsc)
      : this.visibleSessions.sort(sortByVoteAsc);
  }

  filterSessions(filterBy: string): ISession[] {
    var filter = filterBy.toLowerCase();
    switch (filter) {
      case "beginner":
        return this.sessions.filter(
          (s: ISession) => s.level.toLowerCase() === filter
        );
      case "intermediate":
        return this.sessions.filter(
          (s: ISession) => s.level.toLowerCase() === filter
        );
      case "advance":
        return this.sessions.filter(
          (s: ISession) => s.level.toLowerCase() === filter
        );
      default:
        return this.sessions;
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}

function sortByVoteAsc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
