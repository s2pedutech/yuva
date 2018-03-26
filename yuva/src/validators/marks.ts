import { FormControl } from '@angular/forms';

export class MarksValidator {
  static isValid(control: FormControl) {

    let regExp = /^(100\0|[1-9]?\d)$/;

    if (!regExp.test(control.value)) {
        return {invalidMarks: true};
    }
    return null;
}
}