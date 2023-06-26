import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordToPdfRoutingModule } from './word-to-pdf-routing.module';
import { WordToPdfComponent } from './word-to-pdf/word-to-pdf.component';


@NgModule({
  declarations: [
    WordToPdfComponent
  ],
  imports: [
    CommonModule,
    WordToPdfRoutingModule
  ]
})
export class WordToPdfModule { }
