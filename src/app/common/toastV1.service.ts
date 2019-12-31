import { Injectable } from "@angular/core";
import toastr from "toastr";
// declare let toastr: any;
@Injectable({
  providedIn: "root"
})
export class ToastServiceV1 {
  constructor() {}
  myToastr = toastr;
}
