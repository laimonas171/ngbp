import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormComponentBase } from '../form-component-base';

@Component({
  selector: 'ngbp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent extends FormComponentBase {
  @Input() type = 'text';
  @Input() maxLength: number;
  @Input() placeholder: string;

  constructor() {
    super();
  }
}
