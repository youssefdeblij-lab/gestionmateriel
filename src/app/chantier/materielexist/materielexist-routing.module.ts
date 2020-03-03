import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterielexistPage } from './materielexist.page';

const routes: Routes = [
  {
    path: '',
    component: MaterielexistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterielexistPageRoutingModule {}
