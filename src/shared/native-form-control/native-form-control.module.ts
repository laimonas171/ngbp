import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { RadioGroupComponent } from './radio/radio-group.component';
import { SelectComponent } from './select/select.component';
import { TextareaComponent } from './textarea/textarea.component';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  declarations: [
    InputComponent,
    TextareaComponent,
    ValidationMessageComponent,
    CheckboxComponent,
    RadioGroupComponent,
    SelectComponent,
    ButtonComponent
  ],
  providers: [

  ],
  exports: [
    InputComponent,
    TextareaComponent,
    CheckboxComponent,
    RadioGroupComponent,
    SelectComponent,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule]
})
export class NativeFormControlModule { }
