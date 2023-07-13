import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlToWordRoutingModule } from './html-to-word-routing.module';
import { HtmlToWordComponent } from './html-to-word/html-to-word.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DocumentUploaderModule } from 'src/app/container/document-uploader/document-uploader.module';


@NgModule({
  declarations: [
    HtmlToWordComponent
  ],
  imports: [
    CommonModule,
    HtmlToWordRoutingModule,
    SharedModule,
    DocumentUploaderModule
  ]
})
export class HtmlToWordModule { }
