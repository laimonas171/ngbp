import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {AppRoutingModule} from "./app-routing.module";
import {ExampleOneComponent} from "./containers/example-one/example-one.component";
import {ExampleTwoComponent} from "./containers/example-two/example-two.component";
import {DevFeatureModule} from "@ngbp/util/dev-feature";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ExampleOneComponent, ExampleTwoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevFeatureModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
