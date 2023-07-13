import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  types: Array<any> = [];
  keyword: string = '';
  constructor(public commonService: CommonService,
    private router: Router) {
  }

  typeSelected(type: any) {
    this.commonService.selectedType.next(type)
  }

  keywordEnter() {
    this.commonService.enteredKeyword.next(this.keyword)
  }

  redirectToHome() {
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.types = this.commonService.types;
  }
}
