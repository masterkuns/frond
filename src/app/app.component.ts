import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './services/Usuarios/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto Eventos';
  public identity: any;
  //public Token;

  constructor(public usuariosService: UsuariosService


  ) {
    this.identity = this.usuariosService.getIdentity();



  }
}

