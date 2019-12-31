import { Directive, OnInit, Inject, ElementRef, Input } from "@angular/core";
import { JQ_TOKEN } from "../jquery.service";

@Directive({
  selector: "[app-modal-trigger]"
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input("app-modal-trigger") modalId: string;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit(): void {
    this.el.addEventListener("click", e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
