import { Component, SkipSelf, Self, Optional, Host } from '@angular/core';
import { RandomService } from './random.service';

@Component({
  selector: 'my-grandChild',
  template: `
    <div class="box">
      GrandChildComponent => {{ randomNo }}
    </div>
  `,
  providers: [],
  viewProviders: [],
})
export class GrandChildComponent {
  randomNo;
  constructor(@Host() private randomService: RandomService) {
    this.randomNo = randomService?.RandomNo;
  }
}
