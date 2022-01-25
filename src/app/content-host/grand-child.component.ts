import { Component, SkipSelf, Self, Optional, Host, OnInit, Directive, ElementRef } from '@angular/core';
import { ParentComponent } from './parent.component';
import { RandomService, Service1, Service2, Service3, Service4, Service5 } from './services';

@Component({
  selector: 'my-grandChild',
  template: `
    <div class="box">
      ==GrandChildComponent =><br>
      -- random number from parent's provider: {{ randomNo }}<br>
      -- service info from my providers or viewProviders: {{service1.info}}<br>
      -- service info from host's viewProviders: {{service2.info}}<br>
      -- host component info: {{ cmp.randomNo}}<br>
      -- service info from parent's sibling not work<br>
    </div>
  `,
  providers: [Service1], // could put Service1 here for @host to find
  viewProviders: [],// could put Service1 here for @host to find
})
export class GrandChildComponent {
  randomNo;
  constructor(
    @Host() private randomService: RandomService, // on child component's providers, i'm the content of the child-component
    @Host() public service1: Service1, // on self's providers or viewProviders
    @Host() public service2: Service2, // on host component viewProviders
    @Host() public cmp: ParentComponent, // the host component
    @Host() private service4: Service4, // from parent directive's providers

    @Host() public service3: Service3
  ) {
    this.randomNo = randomService?.RandomNo;
  }
}

@Directive({ selector: '[test]',
providers: [Service1], })
export class TestDirective {
  constructor(private el: ElementRef,
    @Host() private service4: Service4, // from parent directive's providers
    @Host() private service5: Service5, // from parent component's providers
    @Host() public cmp: ParentComponent, // the host component
    @Host() public service2: Service2, // on host component viewProviders
    @Host() public service1: Service1, // on self's providers
    ) {

  }
  ngOnInit() {
    this.el.nativeElement.innerHTML =
      "Directive =>" + this.service4.info;
  }
}

@Component({
  selector: 'empty',
  template: ``
})

export class EmptyComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
