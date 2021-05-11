import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styles: [`
  em {
    float: right;
    color: #E05C65;
    padding-left: 10px;
    }
    .error input,
    .error textarea,
    .error select {
      background-color: #E3C3C5;
    }
    .error ::-webkit-input-placeholder,
    .error ::-webkit-textarea-placeholder,
    .error ::-webkit-select-placeholder {
      color: #999;
    }
    .error ::-moz-placeholder {
      color: #999;
    }
    .error :-moz-placeholder {
      color: #999;
    }
    .error :ms-input-placeholder,
    .error :ms-textarea-placeholder,
    .error :ms-select-placeholder {
      color: #999;
    }`]
})
export class CreateEventComponent implements OnInit {
  newEvent: any;
  isDirty = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveEvent(formValues){
    console.log(formValues);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
