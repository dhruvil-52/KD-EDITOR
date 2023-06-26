import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlToPdfRoutingModule } from './html-to-pdf-routing.module';
import { HtmlToPdfComponent } from './html-to-pdf/html-to-pdf.component';


@NgModule({
  declarations: [
    HtmlToPdfComponent
  ],
  imports: [
    CommonModule,
    HtmlToPdfRoutingModule
  ]
})
export class HtmlToPdfModule { }
