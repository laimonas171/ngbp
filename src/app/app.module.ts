import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { FormBuilder, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoTempModule } from './modules/demo/demo-temp.module';
import { NativeFormControlModule } from '../shared/native-form-control/native-form-control.module';
import { GlobalComponentsModule } from '../shared/global-components/global-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoTempModule,
    NativeFormControlModule,
    GlobalComponentsModule,
    FormsModule
  ],
  providers: [
    Title,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
