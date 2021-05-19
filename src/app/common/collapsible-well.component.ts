import { Component, OnInit, Input } from "@angular/core";
import { ToastServiceV1 } from "./toastV1.service";

@Component({
  selector: "app-collapsible-well",
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        <i *ngIf="!visible" class="fa fa-plus" style="float:right"></i>
        <i *ngIf="visible" class="fa fa-minus" style="float:right"></i>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
  `,
  styles: [
    `
      .well.pointable {
        min-height: 50px;
      }
    `
  ]
})
export class CollapsibleWellComponent implements OnInit {
  @Input() visible: boolean = false;

  constructor(private toastService: ToastServiceV1) {}

  ngOnInit() {}

  toggleContent() {
    this.visible = !this.visible;
  }
}
