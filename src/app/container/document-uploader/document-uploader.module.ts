import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentUploaderRoutingModule } from './document-uploader-routing.module';
import { DocumentUploaderComponent } from './document-uploader/document-uploader.component';


@NgModule({
  declarations: [
    DocumentUploaderComponent
  ],
  imports: [
    CommonModule,
    DocumentUploaderRoutingModule
  ],
  exports: [
    DocumentUploaderComponent
  ]
})
export class DocumentUploaderModule { }
