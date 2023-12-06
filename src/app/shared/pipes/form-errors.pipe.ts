import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formErrors',
})
export class FormErrorsPipe implements PipeTransform {
  transform(
    value: ValidationErrors | null | undefined,
    ...args: unknown[]
  ): unknown {
   
    if (!value) return '';

    const errorMessages: string[] = [];

    if ('required' in value) {
      errorMessages.push('This field is required');
    }

    if ('email' in value) {
      errorMessages.push('It must be a valid email');
    }

    if ('minlength' in value) {
      errorMessages.push(
        'The minimum length is ' + value['minlength'].requiredLength
      );
    }

    if('invalidPhone' in value){
      errorMessages.push(
        'invalid cell phone'
      )
    }

    return errorMessages.join('. ');
  }
}
