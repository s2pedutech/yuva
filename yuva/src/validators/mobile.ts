import { FormControl } from '@angular/forms';

export class MobileValidator {
  static isValid(control: FormControl) {

    let regExp = /^[6789]\d{9}$/;

    if (!regExp.test(control.value)) {
        return {invalidMobile: true};
    }
    return null;
}
}