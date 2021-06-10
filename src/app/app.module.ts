import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoordinadorComponent } from './coordinador/coordinador.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DashboardComponent } from './general/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    LoginComponent,
    DashboardComponent,
    CoordinadorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPermissionsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
