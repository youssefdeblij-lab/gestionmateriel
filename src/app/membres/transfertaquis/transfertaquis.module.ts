import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransfertaquisPageRoutingModule } from './transfertaquis-routing.module';

import { TransfertaquisPage } from './transfertaquis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransfertaquisPageRoutingModule
  ],
  declarations: [TransfertaquisPage]
})
export class TransfertaquisPageModule {}
