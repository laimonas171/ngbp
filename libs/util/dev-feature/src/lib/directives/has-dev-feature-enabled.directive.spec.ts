import {HasDevFeatureEnabledDirective} from './has-dev-feature-enabled.directive';
import {Component} from '@angular/core';
import {DevFeature, DevFeatureService} from '@ngbp/util/dev-feature';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

@Component({
  template: `<div id="dev-feature" *hasDevFeatureEnabled="devFeature">
    Feature component
  </div>`,
})
class TestHostComponent {
  devFeature = DevFeature.All;
}

const FakeDevFeatureService: Partial<DevFeatureService> = {
  isEnabled: (devFeature) => devFeature === DevFeature.ExampleFeature,
};

describe('HasDevFeatureEnabledDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HasDevFeatureEnabledDirective, TestHostComponent],
    })
      .overrideDirective(HasDevFeatureEnabledDirective, {
        set: {
          providers: [
            { provide: DevFeatureService, useValue: FakeDevFeatureService },
          ],
        },
      })
      .compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });

  it('should show element if DevFeature key is enabled', () => {
    fixture.componentInstance.devFeature = DevFeature.ExampleFeature;
    fixture.detectChanges();
    const el = fixture.debugElement.query(
      By.css('#dev-feature')
    )?.nativeElement;
    expect(el).toBeTruthy();
  });

  it('should NOT show element if DevFeature key is NOT enabled', () => {
    fixture.componentInstance.devFeature = DevFeature.Example2;
    fixture.detectChanges();
    const el = fixture.debugElement.query(
      By.css('#dev-feature')
    )?.nativeElement;
    expect(el).toBeFalsy();
  });
});
