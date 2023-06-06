import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  items: Array<any> = [];
  selectedType: string = "";

  constructor(
    public commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.items = this.commonService.items;
    this.commonService.selectedType.subscribe((e) => {
      this.selectedType = e;
      this.items = this.commonService.items.filter((e) => {
        if (e.type1 == this.selectedType || e.type2 == this.selectedType) {
          return true
        } else {
          return false
        }
      })
    })

    this.commonService.enteredKeyword.subscribe((e) => {
      this.selectedType = e;
      this.items = this.commonService.items.filter((e) => {
        if (e.type1.includes(this.selectedType) || e.type2.includes(this.selectedType)) {
          return true
        } else {
          return false
        }
      })
    })
  }

}
