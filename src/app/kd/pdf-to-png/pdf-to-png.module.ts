import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfToPngRoutingModule } from './pdf-to-png-routing.module';
import { PdfToPngComponent } from './pdf-to-png/pdf-to-png.component';


@NgModule({
  declarations: [
    PdfToPngComponent
  ],
  imports: [
    CommonModule,
    PdfToPngRoutingModule
  ]
})
export class PdfToPngModule { }
