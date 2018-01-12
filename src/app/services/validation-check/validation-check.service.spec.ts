import { TestBed, inject } from '@angular/core/testing';

import { ValidationCheckService } from './validation-check.service';

describe('ValidationCheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationCheckService]
    });
  });

  it('should be created', inject([ValidationCheckService], (service: ValidationCheckService) => {
    expect(service).toBeTruthy();
  }));
});
