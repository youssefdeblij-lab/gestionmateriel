import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { TransfertMaterielPageRoutingModule } from './transfert-materiel-routing.module';

import { TransfertMaterielPage } from './transfert-materiel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TransfertMaterielPageRoutingModule
  ],
  declarations: [TransfertMaterielPage]
})
export class TransfertMaterielPageModule {}
