import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordToHtmlComponent } from './word-to-html/word-to-html.component';

const routes: Routes = [
  {
    path: '', component: WordToHtmlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordToHtmlRoutingModule { }
