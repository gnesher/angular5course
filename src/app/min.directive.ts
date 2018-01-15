import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[appMin]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinDirective, multi: true }]
})
export class MinDirective implements Validator {
  @Input()
  appMin: number;

  validate(c: FormControl): { [key: string]: any } {
    if (c.value) {
      const v = parseInt(c.value, 10);
      return (v <= this.appMin) ? { 'customMin': true } : null;
    }

    return null;
  }
}
