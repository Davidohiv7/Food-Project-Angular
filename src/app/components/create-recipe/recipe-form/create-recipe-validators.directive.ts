import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

export function requireValidator(name: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const onlyLetters = !control.value;
        return onlyLetters ? {required: 'A ' + name + ' is required'} : null;
    };
  }

export function onlyContainValidator(nameRe: RegExp, name: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const onlyLetters = !nameRe.test(control.value);
      return onlyLetters ? {onlyLetters: name + ' must contain only letters and parenthesis'} : null;
    };
  }

export function lengthValidator(nameRe: RegExp, name: string, characters: string): ValidatorFn {
return (control: AbstractControl): ValidationErrors | null => {
    const onlyLetters = control.value && !nameRe.test(control.value);
    return onlyLetters ? {length: name + ' must be ' + characters + ' characters long minimum'} : null;
};
}

export function isURLValidator(name: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const onlyLetters = control.value && !/^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-.@:%_+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g.test(control.value);
    return onlyLetters ? {onlyLetters: name + ' must have a URL structure'} : null;
  };
}

export function emptyArrayValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
      const onlyLetters = control.value.length === 0;
      return onlyLetters ? {length: 'Please select at least one diet type, you can choose more than one'} : null;
  };
  }