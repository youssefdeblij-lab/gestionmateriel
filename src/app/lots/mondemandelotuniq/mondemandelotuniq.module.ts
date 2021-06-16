import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MondemandelotuniqPageRoutingModule } from './mondemandelotuniq-routing.module';

import { MondemandelotuniqPage } from './mondemandelotuniq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MondemandelotuniqPageRoutingModule
  ],
  declarations: [MondemandelotuniqPage]
})
export class MondemandelotuniqPageModule {}
