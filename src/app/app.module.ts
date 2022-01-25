import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent, SiblingComponent } from './content-host/child.component';
import { EmptyComponent, GrandChildComponent, TestDirective } from './content-host/grand-child.component';
import { ParentComponent } from './content-host/parent.component';
import { Test1Directive, } from './content-host/test.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    GrandChildComponent,
    ChildComponent,
    SiblingComponent,
    TestDirective,
    Test1Directive,
    EmptyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
