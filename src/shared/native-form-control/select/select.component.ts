import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormComponentBase } from '../form-component-base';
import { FormControlOption } from '../form-control-models';

@Component({
  selector: 'ngbp-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }]
})
export class SelectComponent extends FormComponentBase {
  @Input() options: FormControlOption[];

  constructor() {
    super();
  }

  // form control can have any type of value
  // tslint:disable-next-line:no-any
  onOptionChange(value: any) {
    if (value !== undefined) {
      this.propagateChange(value);
    }
  }
}
