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
  singUp(usuarios: any, gettoken = false): Observable<any> {
    if (gettoken != false) {
      usuarios.gettoken = true;
    }
    let json = JSON.stringify(usuarios);
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClient.post(this.URL + 'login', params, { headers: headers });
  }
}
