import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../modelos/usuario'
import { UsuariosService } from '../services/Usuarios/usuarios.service'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private usuarioService: UsuariosService, private router: Router) {
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



          sessionStorage.setItem('token', this.token);
          sessionStorage.setItem('identity', JSON.stringify(this.identity));
          ;

          console.log("esta en una identifiacion" + this.identity.rol);
          JSON.stringify(this.identity);

          sessionStorage.setItem("user", this.identity.rol);
          if (this.identity.rol = "ADMINISTRADOR") {
            this.router.navigate(['/', 'Administrador']);
          } else if (this.identity.rol = null) {

            console.log("usuario normal")
          }

        });



      } else {
        this.status = 'error'

      }

    }, error => {
      console.log(<any>error)
    });

  }
}


