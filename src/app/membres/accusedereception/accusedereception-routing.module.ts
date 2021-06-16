import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccusedereceptionPage } from './accusedereception.page';

const routes: Routes = [
  {
    path: '',
    component: AccusedereceptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccusedereceptionPageRoutingModule {}
