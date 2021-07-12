import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UsuariosService } from '../services/Usuarios/usuarios.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title = 'proyecto Eventos';
  public identity: any;
  constructor(private usuarioService: UsuariosService) {


    this.identity = this.usuarioService.getIdentity();
  }

  ngOnInit(): void {
    $(document).ready(function () {

      $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
      });
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
      });
    });
  }
  cerrrasSesion() {



  }
}
