import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesdemandeslotPageRoutingModule } from './mesdemandeslot-routing.module';

import { MesdemandeslotPage } from './mesdemandeslot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesdemandeslotPageRoutingModule
  ],
  declarations: [MesdemandeslotPage]
})
export class MesdemandeslotPageModule {}
