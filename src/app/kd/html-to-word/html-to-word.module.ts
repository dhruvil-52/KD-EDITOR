import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlToWordRoutingModule } from './html-to-word-routing.module';
import { HtmlToWordComponent } from './html-to-word/html-to-word.component';


@NgModule({
  declarations: [
    HtmlToWordComponent
  ],
  imports: [
    CommonModule,
    HtmlToWordRoutingModule
  ]
})
export class HtmlToWordModule { }
