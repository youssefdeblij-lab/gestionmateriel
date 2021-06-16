import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListChantierTransfertPageRoutingModule } from './list-chantier-transfert-routing.module';

import { ListChantierTransfertPage } from './list-chantier-transfert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListChantierTransfertPageRoutingModule
  ],
  declarations: [ListChantierTransfertPage]
})
export class ListChantierTransfertPageModule {}
