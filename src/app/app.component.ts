import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KD-EDITOR';

  getUrl() {
    return "url('src/assets/Images/bg1.jpg')";
  }
}
