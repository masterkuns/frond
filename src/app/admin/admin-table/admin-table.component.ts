import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { UsuariosService } from '../../services/Usuarios/usuarios.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { AdminModalComponent } from '../admin-modal/admin-modal.component'
import { AdmincrudComponent } from '../admincrud/admincrud.component';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'nombres', 'apellidos', 'correo', 'documentos', 'rol', 'action'];
  dataSource = new MatTableDataSource;
  token: any;
  parent = false;
  color: string;
  parentCount = false;
  @Output() private textoEmitido = new EventEmitter<string>();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;



  constructor(private usuarioService: UsuariosService, public dialog: MatDialog) {
    this.color = "hola"

  }

  ngOnInit(): void {
    this.mostrarDatos();
  }

  mostrarDatos() {

    this.usuarioService.getAllCoordinadores().subscribe(result => {
      if (!result) {
        return;
      }

      this.dataSource = new MatTableDataSource(result.Coordinadores);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });

  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  applyFilter(event: any) {
    this.dataSource.filter = (event.target as HTMLInputElement).value;
  }
  editUser(id: any) {
    return id;

  }
  deleteUser(id: any) {
    Swal.fire({
      title: 'esta seguro?',
      text: 'esto no se puede revertir',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, borralo',

    }).then(res => {
      if (res.value) {
        this.usuarioService.deleteUser(id).subscribe(result => {

          Swal.fire('borrado', 'tu archivo ha sido borrado');
          this.mostrarDatos();

        }, Error => {
          Swal.fire('borrado', 'tu no ha sido borrado');
        }
        )
      } else {



      }

    })


    return id;

  }
  nuevoUsuario() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdminModalComponent)
    dialogRef.afterClosed().subscribe(res => {



    });
    dialogRef.afterClosed().subscribe(art => {
      if (art != undefined)
        this.mostrarDatos();
    });

  }

  displayCounter(count: boolean) {
    this.parentCount = count;
  }

  actualizar(datoDelPopup: string) {
    this.color = datoDelPopup;
  }
}
