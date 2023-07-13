import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent implements OnInit {

  @Input() title: string = ''
  constructor() { }

  download() {
    console.log("download called")
  }

  ngOnInit(): void {
  }
}
