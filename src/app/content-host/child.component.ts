import { Component, SkipSelf, Self, Optional, Host } from '@angular/core';
import { RandomService, Service1, Service3, Service5 } from './services';

@Component({
  selector: 'my-child',
  providers: [RandomService, Service3],
  viewProviders: [], // RandomService here could not be used for @host component in content.
  template: `
    <div class="box">
      <p>ChildComponent</p>
      <ng-content> </ng-content>
    </div>
  `,
})
export class ChildComponent {
}


@Component({
  selector: 'my-sibling',
  providers: [Service5],
  viewProviders: [],
  template: `
    <div class="box">
      <p>SiblingComponent</p>
      <ng-content> </ng-content>
    </div>
  `,
})
export class SiblingComponent {

}
