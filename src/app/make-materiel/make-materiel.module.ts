import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeMaterielPageRoutingModule } from './make-materiel-routing.module';

import { MakeMaterielPage } from './make-materiel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeMaterielPageRoutingModule
  ],
  declarations: [MakeMaterielPage]
})
export class MakeMaterielPageModule {}
