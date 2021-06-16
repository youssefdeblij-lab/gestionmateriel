import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembrestransfertmaterielviewPageRoutingModule } from './membrestransfertmaterielview-routing.module';

import { MembrestransfertmaterielviewPage } from './membrestransfertmaterielview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembrestransfertmaterielviewPageRoutingModule
  ],
  declarations: [MembrestransfertmaterielviewPage]
})
export class MembrestransfertmaterielviewPageModule {}
