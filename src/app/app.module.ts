import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildComponent } from './host/child.component';
import { GrandChildComponent } from './host/grand-child.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ChildComponent,
    GrandChildComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
