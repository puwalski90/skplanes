import {FormControl, ValidationErrors} from "@angular/forms";

export const codeValidator  = (formControl: FormControl): ValidationErrors | null => {
  return (formControl.value as string).startsWith('SK') ? null : { incorrectCode: true };
}

export const additionalInfoValidator  = (formControl: FormControl): ValidationErrors | null => {
  return (formControl.value as string).length > 0 ? null : {incorrectCode: true }
}
