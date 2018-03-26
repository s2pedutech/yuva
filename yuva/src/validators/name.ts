import { FormControl } from '@angular/forms';

export class NameValidator {
  static isValid(control: FormControl) {

    let regExp = /^[a-zA-Z '.-]*$/;

    if (!regExp.test(control.value)) {
        return {invalidName: true};
    }
    return null;
}
}