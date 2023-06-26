import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnlockPdfRoutingModule } from './unlock-pdf-routing.module';
import { UnlockPdfComponent } from './unlock-pdf/unlock-pdf.component';


@NgModule({
  declarations: [
    UnlockPdfComponent
  ],
  imports: [
    CommonModule,
    UnlockPdfRoutingModule
  ]
})
export class UnlockPdfModule { }
