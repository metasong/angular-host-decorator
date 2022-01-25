import { Directive, ElementRef, Host } from '@angular/core';
import { Service4 } from './services';



@Directive({ selector: '[test1]',
providers: [Service4],
})
export class Test1Directive {
  constructor(private el: ElementRef,
    ) {

  }

}
