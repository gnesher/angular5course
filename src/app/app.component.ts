import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private showSideMenu = false;
  private state = 'home';
  private productID = null;

  updateState(newState: string) {
    [this.state, this.productID] = newState.split(':');
    this.showSideMenu = false;
  }

  updateSideMenuState(newState: boolean) {
    this.showSideMenu = newState;
  }
}
