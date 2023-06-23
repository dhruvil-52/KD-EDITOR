import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplitPdfRoutingModule } from './split-pdf-routing.module';
import { SplitPdfComponent } from './split-pdf/split-pdf.component';


@NgModule({
  declarations: [
    SplitPdfComponent
  ],
  imports: [
    CommonModule,
    SplitPdfRoutingModule
  ]
})
export class SplitPdfModule { }
