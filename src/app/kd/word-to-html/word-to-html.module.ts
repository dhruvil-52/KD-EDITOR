import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordToHtmlRoutingModule } from './word-to-html-routing.module';
import { WordToHtmlComponent } from './word-to-html/word-to-html.component';


@NgModule({
  declarations: [
    WordToHtmlComponent
  ],
  imports: [
    CommonModule,
    WordToHtmlRoutingModule
  ]
})
export class WordToHtmlModule { }
