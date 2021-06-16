import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransfertaquisPage } from './transfertaquis.page';

const routes: Routes = [
  {
    path: '',
    component: TransfertaquisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransfertaquisPageRoutingModule {}
