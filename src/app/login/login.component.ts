import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../modelos/usuario'
import { UsuariosService } from '../services/Usuarios/usuarios.service'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuariosService]
})
export class LoginComponent implements OnInit {
  public pageTitle: string;
  public usuario: Usuarios;
  public status: string;
  public token: string;
  public identity: any;
  constructor(private usuarioService: UsuariosService) {
    this.pageTitle = "Identificate",
    this.status = "";
    this.token = '';
    this.identity = "";
    this.usuario = new Usuarios(1, '', '', 0, '', '', '', '');
  }

  ngOnInit(): void {

  }
  onSubmit(Form: any) {
    this.usuarioService.singUp(this.usuario).subscribe(response => {
      if (response.status != "error") {
        this.status = 'success';
        this.token = response;

        //usuario identity
        this.usuarioService.singUp(this.usuario, true).subscribe(response => {
          //usuario identity
          this.identity = response

          //persitencia
          console.log(this.token);
          console.log(this.identity);
          localStorage.setItem('token', this.token);
          localStorage.setItem('identity', JSON.stringify(this.identity));

        });

      } else {
        this.status = 'error'

      }

    }, error => {
      console.log(<any>error)
    });

  }
}


