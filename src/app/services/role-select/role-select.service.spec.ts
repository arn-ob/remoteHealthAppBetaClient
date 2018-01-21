import { TestBed, inject } from '@angular/core/testing';

import { RoleSelectService } from './role-select.service';

describe('RoleSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleSelectService]
    });
  });

  it('should be created', inject([RoleSelectService], (service: RoleSelectService) => {
    expect(service).toBeTruthy();
  }));
});
