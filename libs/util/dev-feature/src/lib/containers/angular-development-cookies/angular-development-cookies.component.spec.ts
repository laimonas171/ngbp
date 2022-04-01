import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AngularDevelopmentCookiesComponent} from './angular-development-cookies.component';
import {DevFeatureService} from '@ngbp/util/dev-feature';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

const featureValue = 'feature1';

const fakeDevFeatureService: Partial<DevFeatureService> = {
  setCookieValue: () => null,
};

let fakeActivatedRoute: Partial<ActivatedRoute> = {};
fakeActivatedRoute.snapshot = {
  queryParams: {
    set: featureValue,
  },
} as unknown as ActivatedRouteSnapshot;

describe('AngularDevelopmentCookiesComponent', () => {
  let component: AngularDevelopmentCookiesComponent;
  let fixture: ComponentFixture<AngularDevelopmentCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularDevelopmentCookiesComponent],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        { provide: DevFeatureService, useValue: fakeDevFeatureService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDevelopmentCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get cookie value from passed query params', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.setCookie).toEqual(featureValue);
  });

  it('should pass cookie value to feature service', () => {
    const spySetCookieValue = jest.spyOn(fakeDevFeatureService, "setCookieValue");
    component.ngOnInit();
    fixture.detectChanges();
    expect(spySetCookieValue).toHaveBeenCalledWith(featureValue);
  })
});
