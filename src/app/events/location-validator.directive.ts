import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateLocation]',
    providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi:true}]
})
export class LocationValidator implements Validator {

    validate(control: AbstractControl): ValidationErrors {
        let addressControl = (<FormGroup>control).get("address");
        let cityControl = <FormGroup>control.get("city");
        let countryControl = <FormGroup>control.get("country");
        let onlineControl = (<FormGroup>control.root).get("onlineUrl");
      
        if ((   addressControl && addressControl.value &&
                cityControl && cityControl.value &&
                countryControl && countryControl.value)
            ||
            (   onlineControl && onlineControl.value))
        {
            return null;
        }else{
            return {validateLocation: false};
        }
    }

    registerOnValidatorChange?(fn: () => void): void {
        throw new Error('Method not implemented.');
    }
}
