import { Injectable } from '@angular/core';
import toastr from 'toastr';
// declare let toastr: any;
@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor() { }
  success(message: string, title?: string) {
    toastr.success(message, title);
  }
  info(message: string, title?: string) {
    toastr.info(message, title);
  }
  warning(message: string, title?: string) {
    toastr.warning(message, title);
  }
  error(message: string, title?: string) {
    toastr.error(message, title);
  }
}
