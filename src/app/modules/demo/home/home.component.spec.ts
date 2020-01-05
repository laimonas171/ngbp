import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { NativeFormControlModule } from '@shared/native-form-control/native-form-control.module';
import { DemoTempModule } from '../demo-temp.module';
import { configureTestSuite, createTestContext, TestCtx } from 'ng-bullet';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let testComponentContext: TestCtx<HomeComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        NativeFormControlModule,
        DemoTempModule
      ],
      declarations: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    testComponentContext = createTestContext(HomeComponent);
    fixture = testComponentContext.fixture;
    component = fixture.componentInstance;
    testComponentContext.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Angular Boilerplate'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Boilerplate');
  });

  it('should render title in a h1 tag', () => {
    testComponentContext.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Angular Boilerplate!');
  });
});
