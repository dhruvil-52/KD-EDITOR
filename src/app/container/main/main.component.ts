import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    public commonService: CommonService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.items = this.commonService.items;
    this.commonService.selectedType.subscribe((e) => {
      this.selectedType = e;
      if (this.selectedType == 'All') {
        this.items = this.commonService.items;
      } else {
        this.items = this.commonService.items.filter((e) => {
          if (e.type1 == this.selectedType || e.type2 == this.selectedType) {
            return true
          } else {
            return false
          }
        })
      }
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
  onClick(row: any) {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['kd', row.path])
    );

    window.open(url, '_blank');
    // this.router.navigate(['kd', row.path])
  }

}
