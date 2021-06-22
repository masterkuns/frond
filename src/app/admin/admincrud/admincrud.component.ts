import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuariosService } from '../../services/Usuarios/usuarios.service'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuarios } from '../../modelos/usuario';
@Component({
  selector: 'app-admincrud',
  templateUrl: './admincrud.component.html',
  styleUrls: ['./admincrud.component.css']
})
export class AdmincrudComponent implements OnInit {
  @Output() private valueChange = new EventEmitter<boolean>();
  @Output() private textoEmitido = new EventEmitter<string>();
  public archivos: any = [];
  pageTitle: String;
  public usuario: Usuarios;
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

  ngOnInit(): void {
  }
  onSubmit(Form: any) {
    this.usuarioService.registerAdmin(this.usuario).subscribe(response => {
      if (response.status == "success") {
        this.status = response.status;
        this.mensaje = 'xd';
        this.textoEmitido.emit(this.mensaje);
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
  valueChanged() {
    this.estado = true;
    this.valueChange.emit(this.estado);
  }

}
