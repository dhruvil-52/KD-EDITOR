import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfToBase64RoutingModule } from './pdf-to-base64-routing.module';
import { PdfToBase64Component } from './pdf-to-base64/pdf-to-base64.component';


@NgModule({
  declarations: [
    PdfToBase64Component
  ],
  imports: [
    CommonModule,
    PdfToBase64RoutingModule
  ]
})
export class PdfToBase64Module { }
