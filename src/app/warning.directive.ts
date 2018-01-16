import { Directive, HostListener, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appWarning]'
})
export class WarningDirective {

  @Input('appWarning') appWarning;
  @Output('buttonClicked') buttonClicked = new EventEmitter();

  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    const approved = confirm(this.appWarning);
    this.buttonClicked.emit(approved);
    return false;
  }

}
