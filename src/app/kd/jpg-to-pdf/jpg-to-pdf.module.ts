import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JpgToPdfRoutingModule } from './jpg-to-pdf-routing.module';
import { JpgToPdfComponent } from './jpg-to-pdf/jpg-to-pdf.component';


@NgModule({
  declarations: [
    JpgToPdfComponent
  ],
  imports: [
    CommonModule,
    JpgToPdfRoutingModule
  ]
})
export class JpgToPdfModule { }
