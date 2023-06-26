import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PngToPdfRoutingModule } from './png-to-pdf-routing.module';
import { PngToPdfComponent } from './png-to-pdf/png-to-pdf.component';


@NgModule({
  declarations: [
    PngToPdfComponent
  ],
  imports: [
    CommonModule,
    PngToPdfRoutingModule
  ]
})
export class PngToPdfModule { }
