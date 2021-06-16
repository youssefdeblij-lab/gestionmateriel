import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccusedereceptionPageRoutingModule } from './accusedereception-routing.module';

import { AccusedereceptionPage } from './accusedereception.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccusedereceptionPageRoutingModule
  ],
  declarations: [AccusedereceptionPage]
})
export class AccusedereceptionPageModule {}
