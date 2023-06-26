import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcelToPdfRoutingModule } from './excel-to-pdf-routing.module';
import { ExcelToPdfComponent } from './excel-to-pdf/excel-to-pdf.component';


@NgModule({
  declarations: [
    ExcelToPdfComponent
  ],
  imports: [
    CommonModule,
    ExcelToPdfRoutingModule
  ]
})
export class ExcelToPdfModule { }
