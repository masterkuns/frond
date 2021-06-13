import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdmincrudComponent } from './admincrud/admincrud.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
const routes: Routes = [
  {
    path: '', component: AdminComponent,

    children: [
      { path: 'adminHome', component: AdminHomeComponent },
      {
        path: 'admin', component: AdminComponent
      },
      { path: 'adminGestion', component: AdmincrudComponent },
      { path: 'adminTabla', component: AdminTableComponent },
    ]
  },




];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
