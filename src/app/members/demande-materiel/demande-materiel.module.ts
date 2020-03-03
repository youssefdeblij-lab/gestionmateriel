import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { DemandeMaterielPageRoutingModule } from './demande-materiel-routing.module';

import { DemandeMaterielPage } from './demande-materiel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DemandeMaterielPageRoutingModule
  ],
  declarations: [DemandeMaterielPage]
})
export class DemandeMaterielPageModule {}
