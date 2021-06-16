import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniqPage } from './uniq.page';

const routes: Routes = [
  {
    path: '',
    component: UniqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniqPageRoutingModule {}
