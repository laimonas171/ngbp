import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControlOption } from '../../../../../shared/native-form-control/form-control-models';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent implements OnInit {
  formGroup: FormGroup;
  optionList: FormControlOption[] = [
    {value: 'one', viewValue: 'First'},
    {value: 2, viewValue: 'Second'},
    {value: 3, viewValue: 'Three'},
    {value: 'IV', viewValue: 'Four'}
    ];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      firstName: [undefined, Validators.required],
      lastName: [undefined, Validators.compose([Validators.minLength(2), Validators.maxLength(7)])],
      message: [undefined, Validators.required],
      agree: [undefined, Validators.requiredTrue],
      radio: [undefined, Validators.required],
      dropdown: [undefined, Validators.required]
    });
  }

  submit() {
    console.log(this.formGroup.value);
  }

  logEvent(e: Event) {
    console.log(e);
  }
}
