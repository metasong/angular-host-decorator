import { Component, OnInit } from '@angular/core';
import { RandomService, Service2 } from './random.service';

@Component({
  selector: 'parent',
  providers:[], // put service 2 here not work
  viewProviders:[Service2],
  template: `
  <p>AppComponent => {{ randomNo }}</p>
<my-child>
  <my-grandChild></my-grandChild>
</my-child>`
})

export class ParentComponent implements OnInit {
  randomNo;
  constructor(private randomService: RandomService) {
    this.randomNo = randomService.RandomNo;
  }

  ngOnInit() { }
}
