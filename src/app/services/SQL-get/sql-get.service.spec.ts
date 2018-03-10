import { TestBed, inject } from '@angular/core/testing';

import { SqlGetService } from './sql-get.service';

describe('SqlGetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SqlGetService]
    });
  });

  it('should be created', inject([SqlGetService], (service: SqlGetService) => {
    expect(service).toBeTruthy();
  }));
});
