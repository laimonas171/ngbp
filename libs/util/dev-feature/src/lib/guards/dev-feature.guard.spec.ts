import { TestBed } from '@angular/core/testing';

import { DevFeatureGuard } from './dev-feature.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { DevFeature, DevFeatureService } from '@ngbp/util/dev-feature';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { PAGE_NOT_FOUND_PATH } from '../types';

const FEATURE_GOOD = 'feature-good' as DevFeature;
const FEATURE_BAD = 'feature-bad' as DevFeature;

const FakeDevFeatureService: Partial<DevFeatureService> = {
  isEnabled: (devFeature) => devFeature === FEATURE_GOOD,
};

const routeSnapshot = new ActivatedRouteSnapshot();
routeSnapshot.data = {
  devFeature: null,
};

const stateSnapshot: RouterStateSnapshot = {
  url: '/',
  root: new ActivatedRouteSnapshot(),
};

let router: Router;
let guard: DevFeatureGuard;

describe('DevFeatureGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        DevFeatureGuard,
        { provide: DevFeatureService, useValue: FakeDevFeatureService },
      ],
    });
    router = TestBed.inject(Router);
    guard = TestBed.inject(DevFeatureGuard);
    jest.spyOn(router, 'parseUrl');
  });

  it('Can be activated, when feature is enabled', async () => {
    routeSnapshot.data = {
      devFeature: FEATURE_GOOD,
    };
    expect(await guard.canActivate(routeSnapshot, stateSnapshot)).toBe(true);
  });

  describe('When NOT enabled', () => {
    beforeEach(() => {
      routeSnapshot.data = {
        devFeature: FEATURE_BAD,
      };
    });

    it('Cannot be activated', async () => {
      expect(await guard.canActivate(routeSnapshot, stateSnapshot)).not.toBe(
        true
      );
    });

    it('Should navigate user to fallback page', async () => {
      await guard.canActivate(routeSnapshot, stateSnapshot);
      expect(router.parseUrl).toHaveBeenLastCalledWith(PAGE_NOT_FOUND_PATH);
    });
  });
});
