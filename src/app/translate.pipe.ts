import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from './translation.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(public translationService: TranslationService) {

  }

  transform(value: any, args?: any): any {
    return this.translationService.getTranslation(value);
  }

}
