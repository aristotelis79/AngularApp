import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Inject
} from "@angular/core";
import { JQ_TOKEN } from "../jquery.service";

@Component({
  selector: "app-simple-modal",
  templateUrl: "./simple-modal.component.html",
  styleUrls: ["./simple-modal.component.scss"]
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick: string;
  @ViewChild("modalcontainer", { static: true }) containerEl: ElementRef;
  //case ViewChildern for multiple elements or ContentChild
  //If we want to access a  child who inside of ng - content and same logic for ContentChildren

  constructor(@Inject(JQ_TOKEN) private $: any) {}

  ngOnInit() {}

  closeModal() {
    if (this.closeOnBodyClick.toLocaleLowerCase() === "true") {
      this.$(this.containerEl.nativeElement).modal("hide");
    }
  }
}
