import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesdemandeslotPage } from './mesdemandeslot.page';

const routes: Routes = [
  {
    path: '',
    component: MesdemandeslotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesdemandeslotPageRoutingModule {}
