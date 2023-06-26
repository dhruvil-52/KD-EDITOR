import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfToExcelRoutingModule } from './pdf-to-excel-routing.module';
import { PdfToExcelComponent } from './pdf-to-excel/pdf-to-excel.component';


@NgModule({
  declarations: [
    PdfToExcelComponent
  ],
  imports: [
    CommonModule,
    PdfToExcelRoutingModule
  ]
})
export class PdfToExcelModule { }
