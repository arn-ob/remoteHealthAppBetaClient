import { TestBed, inject } from '@angular/core/testing';

import { RequestPatientsDataService } from './request-patients-data.service';

describe('RequestPatientsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestPatientsDataService]
    });
  });

  it('should be created', inject([RequestPatientsDataService], (service: RequestPatientsDataService) => {
    expect(service).toBeTruthy();
  }));
});
