import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormComponentBase } from '../form-component-base';
import { FormControlOption } from '../form-control-models';

@Component({
  selector: 'ngbp-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioGroupComponent),
    multi: true
  }]
})
export class RadioGroupComponent extends FormComponentBase {
  @Input() options: FormControlOption[];

  constructor() {
    super();
  }

  // form control can have any type of value
  // tslint:disable-next-line:no-any
  onChangeRadio(value: any) {
    if (value !== undefined) {
      this.propagateChange(value);
    }
  }

  getUniqueRadioId(index: number): string {
    return this.name + index;
  }
}
