import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MergePdfRoutingModule } from './merge-pdf-routing.module';
import { MergePdfComponent } from './merge-pdf/merge-pdf.component';


@NgModule({
  declarations: [
    MergePdfComponent
  ],
  imports: [
    CommonModule,
    MergePdfRoutingModule
  ]
})
export class MergePdfModule { }
