import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormComponent } from './demo-form.component';
import { NativeFormControlModule } from '../../../../../shared/native-form-control/native-form-control.module';

describe('DemoFormComponent', () => {
  let component: DemoFormComponent;
  let fixture: ComponentFixture<DemoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormComponent ],
      imports: [
        NativeFormControlModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
