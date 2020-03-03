import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChantierSinglePage } from './chantier-single.page';

const routes: Routes = [
  {
    path: '',
    component: ChantierSinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChantierSinglePageRoutingModule {}
