import { Directive } from "@angular/core";
import {
  Validator,
  AbstractControl,
  ValidationErrors,
  FormGroup,
  NG_VALIDATORS
} from "@angular/forms";

@Directive({
  selector: "[locationValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: LocationValidatorDirective,
      multi: true // important for add LocationValidatorDirective and not override the build in
    }
  ]
})
export class LocationValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    let addressControl = (<FormGroup>control).get("address");
    let cityControl = <FormGroup>control.get("city");
    let countryControl = <FormGroup>control.get("country");
    let onlineControl = (<FormGroup>control.root).get("onlineUrl");

    if (
      (addressControl &&
        addressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (onlineControl && onlineControl.value)
    ) {
      return null;
    } else {
      return { locationValidator: false };
    }
  }

  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }
}
