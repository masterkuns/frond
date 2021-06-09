import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor() { }


  public canActivate(route: ActivatedRouteSnapshot) {
    let user = sessionStorage.getItem('user');
    if (user == 'ADMINISTRADOR') {
      return true;
    }
    return false;
  }
}
