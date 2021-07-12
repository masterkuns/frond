import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AdminComponent, } from './admin/admin.component';
import { RouteGuardService } from './services/route-guard.service';
import { DashboardComponent } from './general/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,

    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'general',

        loadChildren: () => import('./general/general.module').then(m => m.GeneralModule)
      },


      { path: 'register', component: UsuariosComponent },
    ]
  },

  {
    path: 'coordinador',
    canActivate: [RouteGuardService],
    loadChildren: () => import('./coordinador/coordinador.module').then(m => m.CoordinadorModule)
  },

  {
    path: 'Administrador',
    data: {
      rol: 'ADMINISTRADOR'
    },
    canActivate: [RouteGuardService],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)

  },


  { path: '', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
