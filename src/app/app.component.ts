import { Component, VERSION } from '@angular/core';
import { RandomService } from './host/random.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  randomNo;
  constructor(private randomService: RandomService) {
    this.randomNo = randomService.RandomNo;
  }
}
