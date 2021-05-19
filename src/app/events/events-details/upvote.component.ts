import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-upvote",
  templateUrl: "./upvote.component.html",
  styleUrls: ["./upvote.component.scss"]
})
export class UpvoteComponent {
  @Input() count: number;
  @Input() set voted(val) {
    this.iconColor = val ? "red" : "white";
  }
  @Output() vote = new EventEmitter();
  iconColor: string;

  onClick() {
    this.vote.emit({});
  }
}
