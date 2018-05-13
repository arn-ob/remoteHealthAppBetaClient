import { TestBed, inject } from '@angular/core/testing';

import { SelectdbService } from './selectdb.service';

describe('SelectdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectdbService]
    });
  });

  it('should be created', inject([SelectdbService], (service: SelectdbService) => {
    expect(service).toBeTruthy();
  }));
});
