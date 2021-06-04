import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../modelos/usuario'
import { UsuariosService } from '../services/Usuarios/usuarios.service'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  pageTitle: String;
  public usuario: Usuarios;
  public status: String;

  constructor(private usuarioService: UsuariosService) {
    this.pageTitle = "registro",
      this.status = "";
    this.usuario = new Usuarios(1, '', '', 0, '', '', '', '');
  }

  ngOnInit(): void {


  }
  onSubmit(Form: any) {
    this.usuarioService.register(this.usuario).subscribe(response => {
      if (response.status == "success") {
        this.status = response.status;
        Form.reset();
      } else {
        this.status = 'error'

      }

    }, error => {
      console.log(<any>error)
    })

  }
}
