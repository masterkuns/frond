import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
const routes: Routes = [
  {
    path: '', children: [
      { path: 'admins/adminHomes', component: AdminHomeComponent },
      { path: 'admins', component: AdminComponent },
      { path: '', redirectTo: 'admins', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
