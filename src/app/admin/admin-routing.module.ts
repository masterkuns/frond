import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,

    children: [
      { path: 'adminHome', component: AdminHomeComponent },
      {
        path: 'admin', component: AdminComponent



      }


    ]
  },




];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }