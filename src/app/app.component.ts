import { Component, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private showSideMenu = false;

  constructor(private router: Router) {
    router.events.subscribe( e => {
      if (e instanceof NavigationEnd) {
        this.showSideMenu = false;
      }
    });
  }

  updateSideMenuState(newState: boolean) {
    this.showSideMenu = newState;
  }
}
