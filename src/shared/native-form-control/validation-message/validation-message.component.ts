import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ValidationMessage } from './validation-message';

@Component({
  selector: 'ngbp-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent {
  @Input() control: AbstractControl;
  @Input('labelText') set labelTextFormat(label: string) {
    this.labelText = label && label.length ? this.uppercaseFirstCharacter(label.toLowerCase()) : '';
  }

  labelText: string;

  get error(): string {
    if (this.control.errors) {
      const firstValidatorName = Object.keys(this.control.errors)[0];

      try {
        return ValidationMessage[firstValidatorName](this.control.errors[firstValidatorName], this.labelText);
      } catch (e) {
        throw new Error(`ValidationMessage is missing for validator: ${firstValidatorName}.`);
      }
    }
  }

  get hasError(): boolean {
    return this.control && !!this.control.errors && this.control.touched;
  }

  uppercaseFirstCharacter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
