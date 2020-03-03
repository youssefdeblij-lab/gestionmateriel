import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeMaterielPage } from './make-materiel.page';

const routes: Routes = [
  {
    path: '',
    component: MakeMaterielPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeMaterielPageRoutingModule {}
