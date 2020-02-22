import { EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, ControlValueAccessor } from '@angular/forms';

export class FormComponentBase implements ControlValueAccessor {
  @Input() formControl: AbstractControl;
  @Input() label: string;
  @Input() name: string;
  // ngClass accepts: string, array or object.
  // tslint:disable-next-line:no-any
  @Input() labelNgClass: any;
  // ngClass accepts: string, array or object.
  // tslint:disable-next-line:no-any
  @Input() inputNgClass: any;

  @Input() required;
  @Input() autofocus;
  @Input() readonly;

  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();

  value: string;
  isDisabled: boolean;

  get describedBy() {
    return this.name + '-description';
  }

  onFocus(event: FocusEvent) {
    this.focus.emit(event);
  }
  onBlur(event: FocusEvent) {
    this.blur.emit(event);
  }

  // handler for value change, reference to ControlValueAccessor interface
  // tslint:disable-next-line:no-any
  propagateChange = (value: any) => {};
  onTouched = () => {};

  // reference to ControlValueAccessor interface
  // tslint:disable-next-line:no-any
  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = value;
      this.propagateChange(this.value);
    }
  }

  // reference to ControlValueAccessor interface
  // tslint:disable-next-line:no-any
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  onChange(): void {
    if (this.value !== undefined) {
      this.propagateChange(this.value);
    }
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
