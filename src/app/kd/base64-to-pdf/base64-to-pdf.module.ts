import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Base64ToPdfRoutingModule } from './base64-to-pdf-routing.module';
import { Base64ToPdfComponent } from './base64-to-pdf/base64-to-pdf.component';


@NgModule({
  declarations: [
    Base64ToPdfComponent
  ],
  imports: [
    CommonModule,
    Base64ToPdfRoutingModule
  ]
})
export class Base64ToPdfModule { }
