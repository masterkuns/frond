import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../modelos/usuario'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  pageTitle: String;
  public usuario: Usuarios;
  constructor() {
    this.pageTitle = "",
      this.usuario = new Usuarios(1, '', '', 0, '', '', '', '');
  }

  ngOnInit(): void {


  }
  onSubmit() {


  }
}
