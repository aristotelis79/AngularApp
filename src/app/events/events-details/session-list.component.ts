import { Component, Input, OnInit } from '@angular/core';
import { ISession } from 'src/app/shared';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  @Input() sessions: ISession[];

  constructor() { }

  ngOnInit(): void {
  }

}
