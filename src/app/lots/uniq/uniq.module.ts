import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniqPageRoutingModule } from './uniq-routing.module';

import { UniqPage } from './uniq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniqPageRoutingModule
  ],
  declarations: [UniqPage]
})
export class UniqPageModule {}
