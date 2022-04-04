import { TestBed } from '@angular/core/testing';

import { DevFeatureService } from './dev-feature.service';
import {CookieService} from "./cookie.service";
import {DevFeature} from "@ngbp/util/dev-feature";
import {FEATURES_COOKIE_KEY_NAME} from "../types";

let enabledFeatures = "feature1|feature2"

const FakeCookieService: Partial<CookieService> = {
  get: () => enabledFeatures,
  set: () => null,
}
let cookieService: CookieService;

describe('DevFeatureService', () => {
  let service: DevFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: CookieService, useValue: FakeCookieService}]
    }).compileComponents();
    cookieService = TestBed.inject(CookieService);
    service = TestBed.inject(DevFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isEnabled function', () =>{
    it('should return true if requested feature is enabled', () => {
      expect(service.isEnabled('feature1' as DevFeature)).toEqual(true)
    });

    it('should return false if requested feature is NOT enabled', () => {
      expect(service.isEnabled('feature3' as DevFeature)).toEqual(false)
    });


    it('should return true if DevFeature.All is enabled', () => {
      jest.spyOn(cookieService, "get").mockReturnValueOnce(`${enabledFeatures}|${DevFeature.All}`)
      expect(service.isEnabled('feature3' as DevFeature)).toEqual(true)
    });
  });

  describe('setCookieValue function', () => {
    it('should set cookie with features cookies key and provided value', () => {
      jest.spyOn(cookieService, "set");
      service.setCookieValue(enabledFeatures);
      expect(cookieService.set).toHaveBeenCalledWith(FEATURES_COOKIE_KEY_NAME, enabledFeatures)
    })
  })
});
