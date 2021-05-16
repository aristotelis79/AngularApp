import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styles: [`
    .modal-body {
      height: 250px;
      overflow-y: scroll;
    }`]
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;

  constructor() { }

  ngOnInit(): void {
  }

}
