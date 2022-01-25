import { Component, SkipSelf, Self, Optional, Host } from '@angular/core';
import { ParentComponent } from './parent.component';
import { RandomService, Service1, Service2 } from './random.service';

@Component({
  selector: 'my-grandChild',
  template: `
    <div class="box">
      GrandChildComponent => {{ randomNo  + service1.info + service2.info + cmp.randomNo}}
    </div>
  `,
  providers: [Service1], // could put Service1 here for @host to find
  viewProviders: [],// could put Service1 here for @host to find
})
export class GrandChildComponent {
  randomNo;
  constructor(
    @Host() private randomService: RandomService,
    @Host() public service1: Service1,
    @Host() public service2: Service2,
    @Host() public cmp: ParentComponent
  ) {
    this.randomNo = randomService?.RandomNo;
  }
}
