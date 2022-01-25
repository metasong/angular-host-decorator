import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Service1 {
  public info = ' (service 1) ';
}


@Injectable({ providedIn: 'root' })
export class Service2 {
  public info = ' (service 2) ';
}

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  private _randomNo = 0;

  constructor() {
    console.log('RandomService Constructed');
    this._randomNo = Math.floor(Math.random() * 1000 + 1);
  }

  get RandomNo() {
    return this._randomNo;
  }
}