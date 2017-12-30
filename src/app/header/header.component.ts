import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() showSideMenu: boolean;
  @Output() showSideMenuChanged = new EventEmitter<boolean>();

  constructor() { }

  toggleSideMenu() {
    this.showSideMenuChanged.emit(!this.showSideMenu);
  }

  ngOnInit() {
  }

}
