import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddWatermarkRoutingModule } from './add-watermark-routing.module';
import { AddWatermarkComponent } from './add-watermark/add-watermark.component';


@NgModule({
  declarations: [
    AddWatermarkComponent
  ],
  imports: [
    CommonModule,
    AddWatermarkRoutingModule
  ]
})
export class AddWatermarkModule { }
