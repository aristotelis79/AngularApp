import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

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
  @Input() closeOnBodyClick: string;

  @ViewChild('modalcontainer') elementRef: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit(): void {
  }

  closeModal(){
    if (this.closeOnBodyClick === 'true'){
      this.$(this.elementRef.nativeElement).modal('hide');
    }
  }
}
