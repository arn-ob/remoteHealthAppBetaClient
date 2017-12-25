import { TestBed, inject } from '@angular/core/testing';

import { SqlpostService } from './sqlpost.service';

describe('SqlpostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SqlpostService]
    });
  });

  it('should be created', inject([SqlpostService], (service: SqlpostService) => {
    expect(service).toBeTruthy();
  }));
});
