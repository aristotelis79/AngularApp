import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ISession } from 'src/app/shared';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {

  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  visibleSessions: ISession[] = [];

  constructor() { }

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
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) { return 1; }
  else if (s1.name === s2.name) { return 0; }
  else { return -1; }
}

function sortByVoteDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s2.voters.length;
}
