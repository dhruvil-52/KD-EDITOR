import { Component } from '@angular/core';

@Component({
  selector: 'app-html-to-word',
  templateUrl: './html-to-word.component.html',
  styleUrls: ['./html-to-word.component.scss']
})
export class HtmlToWordComponent {

  constructor() { }

  onUploadFile(files: any) {
    console.log("files", files)
  }

  template = `
  <div>{{data.name}}</div>
  <div>{{data.age}}</div>
  <div>{{data.mo}}</div> 
  `

  item = {
    name: 'dhruvil',
    age: 23,
    mo: 89076543210
  }

}
