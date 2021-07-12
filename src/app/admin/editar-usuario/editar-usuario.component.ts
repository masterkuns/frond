import { Component, OnInit, Input } from '@angular/core';
import { UsuariosService } from '../../services/Usuarios/usuarios.service'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuarios } from '../../modelos/usuario';
@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  @Input() usuario: Usuarios;
  public archivos: any = [];
  pageTitle: String;

  public status: String;
  public estado: boolean;
  mensaje: string;
  constructor(private usuarioService: UsuariosService) {

    this.mensaje = "",
      this.estado = false,
      this.pageTitle = "registro",
      this.status = "",
      this.usuario = new Usuarios(1, '', '', 0, '', '', '', '');

  }
  public editUsuarioForm = new FormGroup({

    id: new FormControl('', Validators.required),
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    documentos: new FormControl('', Validators.required),
    contrasena: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
  }
  editUsuario(Form: any) {
    this.usuarioService.updateByAdmin(this.usuario, this.usuario.id).subscribe(response => {
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
function input() {
  throw new Error('Function not implemented.');
}

