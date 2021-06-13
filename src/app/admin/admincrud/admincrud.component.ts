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
  public archivos: any = [];
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
  capturarFile(event: any): any {
    const archivoCapturado = event.target.files[0];
    this.archivos.push(archivoCapturado)
    console.log(event);
  }
  subirArchivo(): any {
    try {
      const formularioDatos = new FormData();
      this.archivos.forEach((archivo: any) => {
        console.log(archivo);
        formularioDatos.append('file', archivo);
      });
      this.usuarioService.subirUsuarios(formularioDatos).subscribe(res => {
        7
        console.log('respuesta', res);
      })

    } catch (error) {
      console.log('error', error)
    }

  }

}
