import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlToWordComponent } from './html-to-word/html-to-word.component';

const routes: Routes = [
  {
    path: '', component: HtmlToWordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlToWordRoutingModule { }
