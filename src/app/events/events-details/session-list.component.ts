import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ISession } from 'src/app/shared';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {

  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() eventId: number;

  visibleSessions: ISession[] = [];

  constructor(
    public authservice: AuthService,
    private voterService: VoterService) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.sessions){
      this.fitlterSession(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVoteDesc);
    }
  }

  fitlterSession(filter: string) {
    if (filter === 'all'){
      this.visibleSessions = this.sessions.slice(0);
    }else{
      this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filter);
    }
  }

  toogleVote(session: ISession){
    if (this.userHasVote(session)){
      this.voterService.deleteVoter(this.eventId, session, this.authservice.curretUser.userName);
    }else{
      this.voterService.addVoter(this.eventId, session, this.authservice.curretUser.userName);
    }
    if (this.sortBy === 'voters'){
      this.visibleSessions.sort(sortByVoteDesc);
    }
  }

  userHasVote(session: ISession): boolean{
    return this.voterService.userHasVoted(session, this.authservice.curretUser.userName);
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) { return 1; }
  else if (s1.name === s2.name) { return 0; }
  else { return -1; }
}

function sortByVoteDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s2.voters.length;
}
