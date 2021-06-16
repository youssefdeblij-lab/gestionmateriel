import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListChantierTransfertPage } from './list-chantier-transfert.page';

const routes: Routes = [
  {
    path: '',
    component: ListChantierTransfertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListChantierTransfertPageRoutingModule {}
