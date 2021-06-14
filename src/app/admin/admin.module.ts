import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { AdminComponent } from './admin.component';
import { AdmincrudComponent } from './admincrud/admincrud.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminComponent,
    AdmincrudComponent,
    AdminTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSortModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    MatPaginatorModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
