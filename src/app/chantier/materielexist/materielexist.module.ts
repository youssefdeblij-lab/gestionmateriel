import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterielexistPageRoutingModule } from './materielexist-routing.module';

import { MaterielexistPage } from './materielexist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterielexistPageRoutingModule
  ],
  declarations: [MaterielexistPage]
})
export class MaterielexistPageModule {}
