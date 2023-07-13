import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompilerDirective } from '../directives/compiler.directive';
import { CommonHeaderComponent } from '../container/common-header/common-header.component';


@NgModule({
  declarations: [
    CompilerDirective,
    CommonHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompilerDirective,
    CommonHeaderComponent
  ]
})
export class SharedModule { }
