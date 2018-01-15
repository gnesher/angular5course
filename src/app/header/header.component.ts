import { PermissionsService } from './../permissions.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() showSideMenu: boolean;
  @Output() showSideMenuChanged = new EventEmitter<boolean>();

  constructor(private permissionsService: PermissionsService) { }

  public updateAdminState() {
    this.permissionsService.isAdmin = !this.permissionsService.isAdmin;
  }

  toggleSideMenu() {
    this.showSideMenuChanged.emit(!this.showSideMenu);
  }

  ngOnInit() {
  }

}
