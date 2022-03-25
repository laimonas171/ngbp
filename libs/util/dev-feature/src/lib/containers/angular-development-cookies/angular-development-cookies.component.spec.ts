import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDevelopmentCookiesComponent } from './angular-development-cookies.component';

describe('AngularDevelopmentCookiesComponent', () => {
  let component: AngularDevelopmentCookiesComponent;
  let fixture: ComponentFixture<AngularDevelopmentCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDevelopmentCookiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDevelopmentCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
