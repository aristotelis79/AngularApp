import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
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
  ]})

export class CollapsibleWellComponent implements OnInit {
  visible = true;

  constructor() { }

  ngOnInit(): void { }

  toggleContent(){
   this.visible = !this.visible;
  }
}
