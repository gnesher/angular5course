import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  @Input() showSideMenu: boolean;
  @Output() stateChanged: EventEmitter<string> = new EventEmitter<string>();

  updateSate(newState: string): void {
    this.stateChanged.emit(newState);
  }

  constructor() { }

  ngOnInit() {
  }

}
