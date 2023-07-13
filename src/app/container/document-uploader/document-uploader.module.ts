import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentUploaderRoutingModule } from './document-uploader-routing.module';
import { DocumentUploaderComponent } from './document-uploader/document-uploader.component';
import { NgxUploaderModule } from 'ngx-uploader';


@NgModule({
  declarations: [
    DocumentUploaderComponent
  ],
  imports: [
    CommonModule,
    DocumentUploaderRoutingModule,
    NgxUploaderModule
  ],
  exports: [
    DocumentUploaderComponent
  ]
})
export class DocumentUploaderModule { }
