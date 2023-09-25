import { TestBed } from '@angular/core/testing';

import { AuthanitcationService } from './authanitcation.service';

describe('AuthanitcationService', () => {
  let service: AuthanitcationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthanitcationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
