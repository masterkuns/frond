import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

import { AdminComponent } from './admin.component';
import { AdmincrudComponent } from './admincrud/admincrud.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AdminTableComponent } from './admin-table/admin-table.component';

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
    HttpClientModule,
    MatTableModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
