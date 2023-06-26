import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'merge-pdf', loadChildren: () => import('./merge-pdf/merge-pdf.module').then(m => m.MergePdfModule)
  },
  {
    path: 'split-pdf', loadChildren: () => import('./split-pdf/split-pdf.module').then(m => m.SplitPdfModule)
  },
  {
    path: 'compress-pdf', loadChildren: () => import('./compress-pdf/compress-pdf.module').then(m => m.CompressPdfModule)
  },
  {
    path: 'add-page-number', loadChildren: () => import('./add-page-number/add-page-number.module').then(m => m.AddPageNumberModule)
  },
  {
    path: 'pdf-to-base64', loadChildren: () => import('./pdf-to-base64/pdf-to-base64.module').then(m => m.PdfToBase64Module)
  },
  {
    path: 'base64-to-pdf', loadChildren: () => import('./base64-to-pdf/base64-to-pdf.module').then(m => m.Base64ToPdfModule)
  },
  {
    path: 'html-to-pdf', loadChildren: () => import('./html-to-pdf/html-to-pdf.module').then(m => m.HtmlToPdfModule)
  },
  {
    path: 'html-to-word', loadChildren: () => import('./html-to-word/html-to-word.module').then(m => m.HtmlToWordModule)
  },
  {
    path: 'word-to-html', loadChildren: () => import('./word-to-html/word-to-html.module').then(m => m.WordToHtmlModule)
  },
  {
    path: 'pdf-to-html', loadChildren: () => import('./pdf-to-html/pdf-to-html.module').then(m => m.PdfToHtmlModule)
  },
  {
    path: 'pdf-to-word', loadChildren: () => import('./pdf-to-word/pdf-to-word.module').then(m => m.PdfToWordModule)
  },
  {
    path: 'pdf-to-excel', loadChildren: () => import('./pdf-to-excel/pdf-to-excel.module').then(m => m.PdfToExcelModule)
  },
  {
    path: 'word-to-pdf', loadChildren: () => import('./word-to-pdf/word-to-pdf.module').then(m => m.WordToPdfModule)
  },
  {
    path: 'excel-to-pdf', loadChildren: () => import('./excel-to-pdf/excel-to-pdf.module').then(m => m.ExcelToPdfModule)
  },
  {
    path: 'pdf-to-png', loadChildren: () => import('./pdf-to-png/pdf-to-png.module').then(m => m.PdfToPngModule)
  },
  {
    path: 'png-to-pdf', loadChildren: () => import('./png-to-pdf/png-to-pdf.module').then(m => m.PngToPdfModule)
  },
  {
    path: 'pdf-to-jpg', loadChildren: () => import('./pdf-to-jpg/pdf-to-jpg.module').then(m => m.PdfToJpgModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KdRoutingModule { }
