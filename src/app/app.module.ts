import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './content-host/child.component';
import { GrandChildComponent } from './content-host/grand-child.component';
import { ParentComponent } from './content-host/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    GrandChildComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
