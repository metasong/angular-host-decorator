import { Component, VERSION } from '@angular/core';
import { RandomService, Service1, Service2 } from './content-host/random.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

}
