import { TestBed } from '@angular/core/testing';

import { DevFeatureGuard } from './dev-feature.guard';

describe('DevFeatureGuard', () => {
  let guard: DevFeatureGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DevFeatureGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
