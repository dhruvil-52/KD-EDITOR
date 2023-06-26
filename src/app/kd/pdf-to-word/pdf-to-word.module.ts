import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfToWordRoutingModule } from './pdf-to-word-routing.module';
import { PdfToWordComponent } from './pdf-to-word/pdf-to-word.component';


@NgModule({
  declarations: [
    PdfToWordComponent
  ],
  imports: [
    CommonModule,
    PdfToWordRoutingModule
  ]
})
export class PdfToWordModule { }
