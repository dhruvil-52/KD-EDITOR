import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfToJpgRoutingModule } from './pdf-to-jpg-routing.module';
import { PdfToJpgComponent } from './pdf-to-jpg.component';


@NgModule({
  declarations: [
    PdfToJpgComponent
  ],
  imports: [
    CommonModule,
    PdfToJpgRoutingModule
  ]
})
export class PdfToJpgModule { }
