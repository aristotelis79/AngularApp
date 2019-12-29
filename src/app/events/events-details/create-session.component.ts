import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { ISession, restrictedWords } from "../shared/index";

@Component({
  selector: "app-create-session",
  templateUrl: "./create-session.component.html",
  styleUrls: ["./create-session.component.scss"]
})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter<ISession>();
  @Output() cancelAddSession = new EventEmitter();
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  ngOnInit() {
    this.name = new FormControl("", Validators.required);
    this.presenter = new FormControl("", Validators.required);
    this.duration = new FormControl("", Validators.required);
    this.level = new FormControl("", Validators.required);
    this.abstract = new FormControl("", [
      Validators.required,
      Validators.maxLength(400),
      restrictedWords(["foo", "bar"])
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(formValues) {
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: +formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: []
    };
    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit();
  }

  private validateField(field: string) {
    return (
      this.newSessionForm.controls[field].invalid &&
      this.newSessionForm.controls[field].dirty
    );
  }

  private validateFieldError(field: string) {
    let validateField = this.validateField(field);
    if (validateField && this.newSessionForm.controls[field].errors.required)
      return "Required";

    if (validateField && this.newSessionForm.controls[field].errors.maxLength)
      return "Max length 400";

    if (
      validateField &&
      this.newSessionForm.controls[field].errors.restrictedWords
    )
      return `Restricted words ${this.abstract.errors.restrictedWords}`;

    return null;
  }
}
