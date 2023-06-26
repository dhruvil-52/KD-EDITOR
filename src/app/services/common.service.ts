import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  types: Array<any> = ['All'];
  selectedType: Subject<string> = new Subject()
  enteredKeyword: Subject<string> = new Subject()

  constructor() {
    this.getUniqueTypeList();
  }

  items: Array<any> = [
    {
      id: 1,
      icon: 'assets/icons/merge-pdf.png',
      path: 'merge-pdf',
      title: 'Merge PDF',
      content: 'Combine PDFs in the order you want with the easiest PDF merger available.',
      type1: 'merge',
      type2: 'pdf'
    },
    {
      id: 2,
      icon: 'assets/icons/split-pdf.png',
      path: 'split-pdf',
      title: 'Split PDF',
      content: 'Separate one page or a whole set for easy conversion into independent PDF files.',
      type1: 'split',
      type2: 'pdf'
    },
    {
      id: 3,
      icon: 'assets/icons/compress-pdf.png',
      path: 'compress-pdf',
      title: 'Compress PDF',
      content: 'Separate one page or a whole set for easy conversion into independent PDF files.',
      type1: 'compress',
      type2: 'pdf'
    },
    {
      id: 4,
      icon: 'assets/icons/add-page-number-to-pdf.png',
      path: 'add-page-number',
      title: 'Add Page Number',
      content: 'Separate one page or a whole set for easy conversion into independent PDF files.',
      type1: 'page number',
      type2: 'pdf'
    },
    {
      id: 5,
      icon: 'assets/icons/pdf-to-word.png',
      path:'pdf-to-word',
      title: 'PDF to Word',
      content: '',
      type1: 'pdf',
      type2: 'word'
    },
    {
      id: 6,
      icon: 'assets/icons/pdf-to-excel.png',
      path:'pdf-to-excel',
      title: 'PDF to Excel',
      content: '',
      type1: 'pdf',
      type2: 'excel'
    },
    {
      id: 7,
      icon: 'assets/icons/pdf-to-html.png',
      path:'pdf-to-html',
      title: 'PDF to HTML',
      content: '',
      type1: 'pdf',
      type2: 'html'
    },
    {
      id: 8,
      icon: 'assets/icons/pdf-to-base64.png',
      path:'pdf-to-base64',
      title: 'PDF to Base64',
      content: '',
      type1: 'base64',
      type2: 'pdf'
    },
    {
      id: 9,
      icon: 'assets/icons/word-to-pdf.png',
      path:'word-to-pdf',
      title: 'Word to PDF',
      content: '',
      type1: 'pdf',
      type2: 'word'
    },
    {
      id: 10,
      icon: 'assets/icons/excel-to-pdf.png',
      path:'excel-to-pdf',
      title: 'Excel to PDF',
      content: '',
      type1: 'pdf',
      type2: 'excel'
    },
    {
      id: 11,
      icon: 'assets/icons/html-tp-pdf.png',
      path:'html-to-pdf',
      title: 'HTML to PDF',
      content: '',
      type1: 'pdf',
      type2: 'html'
    },
    {
      id: 12,
      icon: 'assets/icons/base64-to-pdf.png',
      path:'base64-to-pdf',
      title: 'Base64 to PDF',
      content: '',
      type1: 'base64',
      type2: 'pdf'
    },
    {
      id: 13,
      icon: 'assets/icons/word-to-html.png',
      path:'word-to-html',
      title: 'Word to HTML',
      content: '',
      type1: 'word',
      type2: 'html'
    },
    {
      id: 14,
      icon: 'assets/icons/html-to-word.png',
      path:'html-to-word',
      title: 'HTML to Word',
      content: '',
      type1: 'word',
      type2: 'html'
    },
    {
      id: 15,
      icon: 'assets/icons/remove-bg-from-jpg.png',
      path:'remove-bg-from-jpg',
      title: 'Remove BG From JPG',
      content: '',
      type1: 'bg background',
      type2: 'jpg'
    },
    {
      id: 16,
      icon: 'assets/icons/remove-bg-from-img.png',
      path:'remove-bg-from-png',
      title: 'Remove BG From PNG',
      content: '',
      type1: 'bg background',
      type2: 'png'
    },
    {
      id: 17,
      icon: 'assets/icons/pdf-to-png.png',
      path:'pdf-to-png',
      title: 'PDF to PNG',
      content: '',
      type1: 'pdf',
      type2: 'png'
    },
    {
      id: 18,
      icon: 'assets/icons/png-to-pdf.png',
      path:'png-to-pdf',
      title: 'PNG to PDF',
      content: '',
      type1: 'pdf',
      type2: 'png'
    },
    {
      id: 19,
      icon: 'assets/icons/pdf-to-jpg.png',
      path:'pdf-to-jpg',
      title: 'PDF to JPG',
      content: '',
      type1: 'pdf',
      type2: 'jpg'
    },
    {
      id: 20,
      icon: 'assets/icons/jpg-to-pdf.png',
      path:'jpg-to-pdf',
      title: 'JPG to PDF',
      content: '',
      type1: 'pdf',
      type2: 'jpg'
    },
    {
      id: 21,
      icon: 'assets/icons/stamp-on-pdf.png',
      path:'add-watermark',
      title: 'Add Watermark',
      content: '',
      type1: 'watermark',
      type2: 'pdf'
    },
    {
      id: 22,
      icon: 'assets/icons/unlock-pdf.png',
      path:'unlock-pdf',
      title: 'Unlock PDF',
      content: '',
      type1: 'unlock',
      type2: 'pdf'
    }
  ]

  getUniqueTypeList() {
    this.items.forEach((e) => {
      if (!this.types.includes(e.type1)) {
        this.types.push(e.type1)
      }
      if (!this.types.includes(e.type2)) {
        this.types.push(e.type2)
      }
    })
  }
}
