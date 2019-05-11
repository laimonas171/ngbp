import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeFormControlModule } from '../native-form-control.module';
import { ButtonComponent } from '@shared/native-form-control/button/button.component';
import { TemplateRef } from '@angular/core';


describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        NativeFormControlModule
      ],
      providers: [
        TemplateRef
      ],
      declarations: [ ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
