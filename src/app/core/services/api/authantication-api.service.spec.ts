import { TestBed } from '@angular/core/testing';

import { AuthanticationApiService } from './authantication-api.service';

describe('AuthanticationApiService', () => {
  let service: AuthanticationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthanticationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
