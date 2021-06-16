import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MondemandelotuniqPage } from './mondemandelotuniq.page';

const routes: Routes = [
  {
    path: '',
    component: MondemandelotuniqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MondemandelotuniqPageRoutingModule {}
