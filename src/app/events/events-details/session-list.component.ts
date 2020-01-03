import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Inject
} from "@angular/core";
import { ISession } from "../shared/index";
import { AuthService } from "../../user/auth.service";
import { VoterService } from "./voter.service";
import { IToastr, TOASTR_TOKEN } from "src/app/common";

@Component({
  selector: "app-session-list",
  templateUrl: "./session-list.component.html",
  styleUrls: ["./session-list.component.scss"]
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() eventId: number;
  visibleSessions: ISession[] = [];

  constructor(
    public auth: AuthService,
    private voterService: VoterService,
    @Inject(TOASTR_TOKEN) private toastr: IToastr
  ) {}

  ngOnChanges(): void {
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

  userHasVoted(session: ISession) {
    if (!this.auth.isAuthenticated()) return false;

    return this.voterService.userHasVoted(
      session,
      this.auth.currentUser.userName
    );
  }

  toggleVote(session: ISession) {
    if (!this.auth.isAuthenticated()) {
      this.toastr.warning("Must login first");
      return;
    }

    var currentUserName = this.auth.currentUser.userName;
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, currentUserName);
    } else {
      this.voterService.addVoter(this.eventId, session, currentUserName);
    }
    if (this.sortBy === "votes") this.visibleSessions.sort(sortByVoteAsc);
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
