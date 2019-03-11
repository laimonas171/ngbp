import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NativeFormControlModule } from '../../../shared/native-form-control/native-form-control.module';
import { DemoFormComponent } from './home/demo-form/demo-form.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    DemoFormComponent
  ],
  imports: [
    CommonModule,
    NativeFormControlModule
  ]
})
export class DemoTempModule {
}
