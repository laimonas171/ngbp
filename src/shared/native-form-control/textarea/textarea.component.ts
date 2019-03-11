import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormComponentBase } from '../form-component-base';

@Component({
  selector: 'ngbp-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaComponent),
    multi: true
  }]
})
export class TextareaComponent extends FormComponentBase {
  @Input() rows: number;
  @Input() cols: number;
  @Input() maxLength: number;
  @Input() placeholder: string;

  constructor() {
    super();
  }
}
