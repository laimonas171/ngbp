import { TestBed } from '@angular/core/testing';

import { DevFeatureService } from './dev-feature.service';

describe('DevFeatureService', () => {
  let service: DevFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
