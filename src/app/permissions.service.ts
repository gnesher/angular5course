import { Injectable } from '@angular/core';

@Injectable()
// just circumventing the login
export class PermissionsService {

  public isAdmin = false;

  constructor() { }

}
