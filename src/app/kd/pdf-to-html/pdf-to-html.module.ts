import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfToHtmlRoutingModule } from './pdf-to-html-routing.module';
import { PdfToHtmlComponent } from './pdf-to-html/pdf-to-html.component';


@NgModule({
  declarations: [
    PdfToHtmlComponent
  ],
  imports: [
    CommonModule,
    PdfToHtmlRoutingModule
  ]
})
export class PdfToHtmlModule { }
