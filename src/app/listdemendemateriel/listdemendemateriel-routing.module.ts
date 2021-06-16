import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListdemendematerielPage } from './listdemendemateriel.page';

const routes: Routes = [
  {
    path: '',
    component: ListdemendematerielPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListdemendematerielPageRoutingModule {}
