import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../../modelos/usuario';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private URL = "http://localhost/rest-proyectos-laravel/public/api/";
  private URLs = "http://localhost/rest-proyectos-laravel/public/api/user/excel";
  public identity: any;
  public token: any;
  constructor(
    public httpClient: HttpClient
  ) {


  }
  register(usuarios: Usuarios): Observable<any> {
    let json = JSON.stringify(usuarios);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClient.post(this.URL + 'register', params, { headers: headers });
  }
  registerAdmin(usuarios: Usuarios): Observable<any> {
    let json = JSON.stringify(usuarios);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClient.post(this.URL + 'register/admin', params, { headers: headers });
  }
  singUp(usuarios: any, gettoken = false): Observable<any> {
    if (gettoken != false) {
      usuarios.gettoken = true;
    }
    let json = JSON.stringify(usuarios);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClient.post(this.URL + 'login', params, { headers: headers });
  }
  getIdentity() {
    let identity = JSON.parse(sessionStorage.getItem('identity') || '{}')
    if (identity && identity != "undefined") {
      this.identity = identity;


    } else {
      this.identity = null;

    }
    return this.identity


  }
  getToken() {
    let token = JSON.parse(localStorage.getItem('token') || '{}');
    if (token && token != "undefined") {
      this.token = token;

    } else {
      this.token = null;

    }
    return this.token;
  }

  permissionsRole() {
    this.getToken


  }

  subirUsuarios(archivo: any) {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClient.post(this.URLs, archivo, { headers: headers });
  }
  getAllCoordinadores(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClient.get(this.URL + 'user/corrdinadores', { headers: headers });

  }

  deleteUser(id: any): Observable<any> {

    return this.httpClient.delete(this.URL + 'user/delete/' + id);
  }


}
