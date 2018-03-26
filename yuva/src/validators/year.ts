import { FormControl } from '@angular/forms';

export class YearValidator {
  static isValid(control: FormControl) {

    let regExp = /^(200[5-9]|201[0-9])$/;

    if (!regExp.test(control.value)) {
        return {invalidYear: true};
    }
    return null;
}
}