import { Injectable } from '@angular/core';

@Injectable()
export class TranslationService {

  private _avilableLanguages = ['en', 'he'];

  get avilableLanguages() {
    return this._avilableLanguages;
  }

  private _selectedLanguage = 'en';

  private languageDictionary = {
    'he': {
      'Home': 'בית',
      'About': 'אודות',
      'Product': 'מוצרים',
      'Contact': 'צור קשר',
      'Cart': 'עגלה'
    },
    'en': {
      'Home': 'Home',
      'About': 'About',
      'Product': 'Product',
      'Contact': 'Contact',
      'Cart': 'Cart'
    }
  };

  get selectedLanguage() {
    return this._selectedLanguage;
  }

  set selectedLanguage(newLang) {
    this._selectedLanguage = newLang;
  }

  getTranslation(phrase) {
    return this.languageDictionary[this._selectedLanguage][phrase];
  }

  constructor() { }

}
