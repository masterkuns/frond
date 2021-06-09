import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AdminComponent, } from './admin/admin.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'usuarios', component: UsuariosComponent },

{
  path: 'Administrador',
  canActivate: [RouteGuardService],
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
},
{
  path: 'general',
  canActivate: [RouteGuardService],
  loadChildren: () => import('./general/general.module').then(m => m.GeneralModule)
},
{
  path: 'coordinador',
  canActivate: [RouteGuardService],
  loadChildren: () => import('./coordinador/coordinador.module').then(m => m.CoordinadorModule)
},
{ path: '', redirectTo: 'login', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
