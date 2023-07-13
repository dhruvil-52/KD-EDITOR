import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { menu } from '../shared/items';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  types: Array<any> = ['All'];
  selectedType: Subject<string> = new Subject()
  enteredKeyword: Subject<string> = new Subject()

  constructor(
  ) {
    this.getUniqueTypeList();
  }

  items: Array<any> = menu;

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
