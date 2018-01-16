import { PermissionsService } from './../permissions.service';
import { TranslationService } from './../translation.service';
import { CartService } from './../cart.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  @Input() showSideMenu: boolean;

  selectLanguage(newLang: string): void {
    this.translationService.selectedLanguage = newLang;
  }

  constructor(private cartService: CartService,
              private translationService: TranslationService,
              private permissionsService: PermissionsService) { }

  ngOnInit() {
  }

}
