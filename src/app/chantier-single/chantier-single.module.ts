import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChantierSinglePageRoutingModule } from './chantier-single-routing.module';

import { ChantierSinglePage } from './chantier-single.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChantierSinglePageRoutingModule
  ],
  declarations: [ChantierSinglePage]
})
export class ChantierSinglePageModule {}
