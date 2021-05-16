import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISession } from 'src/app/shared';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() count: number;
  @Input() set voted(val: any) {
    this.iconColor = val ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();
  iconColor: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.vote.emit({});
  }

}
