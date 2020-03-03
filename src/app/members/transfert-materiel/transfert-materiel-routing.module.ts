import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransfertMaterielPage } from './transfert-materiel.page';

const routes: Routes = [
  {
    path: '',
    component: TransfertMaterielPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransfertMaterielPageRoutingModule {}
