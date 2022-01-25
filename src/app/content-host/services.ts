import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Service1 {
  public info = ' (service 1) ';
}


@Injectable({ providedIn: 'root' })
export class Service2 {
  public info = ' (service 2) ';
}
@Injectable({ providedIn: 'root' })
export class Service3 {
  public info = ' (service 3) ';
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

@Injectable({ providedIn: 'root' })
export class Service4 {
  public info = ' (service 4) ';
}
@Injectable({ providedIn: 'root' })
export class Service5 {
  public info = ' (service 5) ';
}
