import { Component, SkipSelf, Self, Optional, Host } from '@angular/core';
import { RandomService, Service1 } from './random.service';

@Component({
  selector: 'my-grandChild',
  template: `
    <div class="box">
      GrandChildComponent => {{ randomNo  + service1.info}}
    </div>
  `,
  providers: [Service1],
  viewProviders: [],
})
export class GrandChildComponent {
  randomNo;
  constructor(
    @Host() private randomService: RandomService,
    @Host() public service1: Service1
  ) {
    this.randomNo = randomService?.RandomNo;
  }
}
