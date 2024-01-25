import { TestBed } from '@angular/core/testing';

import { ApiGymService } from './api-gym.service';

describe('ApiGymService', () => {
  let service: ApiGymService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGymService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
