import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,} from '@angular/router';
import {Observable} from 'rxjs';
import {DevFeature, PAGE_NOT_FOUND_PATH} from '../types';
import {DevFeatureService} from "../services/dev-feature.service";

@Injectable({
  providedIn: 'root',
})
export class DevFeatureGuard implements CanActivate {
  constructor(
    private router: Router,
    private devFeatureService: DevFeatureService,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const devFeature = route.data['devFeature'] as DevFeature;
    const devFeatureEnabled = this.devFeatureService.isEnabled(devFeature);

    if (!devFeatureEnabled) {
      return this.router.parseUrl(PAGE_NOT_FOUND_PATH);
    }

    return true;
  }
}
