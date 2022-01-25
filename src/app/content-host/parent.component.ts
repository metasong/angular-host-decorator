import { Component, OnInit } from '@angular/core';
import { RandomService, Service2 } from './services';

@Component({
  selector: 'parent',
  providers: [], // put service 2 here not work
  viewProviders: [Service2],
  template: `
  <div class="box">
    <p>ParentComponent => {{ randomNo }}</p>
    <my-child test1>
      <my-grandChild></my-grandChild>
    </my-child>
    <my-sibling test1>
      <empty test></empty>
    </my-sibling>
  </div>
`
})

export class ParentComponent implements OnInit {
  randomNo;
  constructor(private randomService: RandomService) {
    this.randomNo = randomService.RandomNo;
  }

  ngOnInit() { }
}
