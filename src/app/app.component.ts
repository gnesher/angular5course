import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSideMenu = false;
  state = 'home';

  updateState(newState: string) {
    this.state = newState;
    this.showSideMenu = false;
  }

  updateSideMenuState(newState: boolean) {
    this.showSideMenu = newState;
  }
}
