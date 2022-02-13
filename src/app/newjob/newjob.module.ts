import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewjobPageRoutingModule } from './newjob-routing.module';

import { NewjobPage } from './newjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewjobPageRoutingModule
  ],
  declarations: [NewjobPage]
})
export class NewjobPageModule {}
