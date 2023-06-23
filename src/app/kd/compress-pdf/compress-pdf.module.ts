import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompressPdfRoutingModule } from './compress-pdf-routing.module';
import { CompressPdfComponent } from './compress-pdf/compress-pdf.component';


@NgModule({
  declarations: [
    CompressPdfComponent
  ],
  imports: [
    CommonModule,
    CompressPdfRoutingModule
  ]
})
export class CompressPdfModule { }
