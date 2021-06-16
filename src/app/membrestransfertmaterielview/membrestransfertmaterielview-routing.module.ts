import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembrestransfertmaterielviewPage } from './membrestransfertmaterielview.page';

const routes: Routes = [
  {
    path: '',
    component: MembrestransfertmaterielviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembrestransfertmaterielviewPageRoutingModule {}
