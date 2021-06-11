import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/Usuarios/usuarios.service'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuarios } from '../../modelos/usuario'
@Component({
  selector: 'app-admincrud',
  templateUrl: './admincrud.component.html',
  styleUrls: ['./admincrud.component.css']
})
export class AdmincrudComponent implements OnInit {
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
    this.usuarioService.registerAdmin(this.usuario).subscribe(response => {
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
