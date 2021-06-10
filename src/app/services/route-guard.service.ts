import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private router: Router) { }


  public canActivate(route: ActivatedRouteSnapshot) {
    let user = sessionStorage.getItem('user');
    if (user == 'ADMINISTRADOR') {
      return true;
    }
    this.router.navigate(['/', 'login']);
    return false;
  }
}
