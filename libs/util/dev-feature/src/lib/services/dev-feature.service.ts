import { Injectable } from '@angular/core';
import { FEATURES_COOKIE_KEY_NAME, DevFeature } from '../types';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root',
})
export class DevFeatureService {
  constructor(private cookieService: CookieService) {}

  public isEnabled(feature: DevFeature): boolean {
    try {
      const enabledFeatures =
        this.cookieService.get(FEATURES_COOKIE_KEY_NAME)?.split('|') || [];
      if (enabledFeatures.indexOf(DevFeature.All) > -1) {
        return true;
      }

      return enabledFeatures.indexOf(feature) > -1;
    } catch (e) {
      return false;
    }
  }

  public setCookieValue(value: string){
    this.cookieService.set(FEATURES_COOKIE_KEY_NAME, value);
  }
}
