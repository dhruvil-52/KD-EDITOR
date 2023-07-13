import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent implements OnInit {

  @Input() title: string = ''
  constructor(private router: Router) { }

  download() {
    console.log("download called")
  }

  redirectToHome() {
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
  }
}
