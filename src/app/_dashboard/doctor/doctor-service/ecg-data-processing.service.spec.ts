import { TestBed, inject } from '@angular/core/testing';

import { EcgDataProcessingService } from './ecg-data-processing.service';

describe('EcgDataProcessingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EcgDataProcessingService]
    });
  });

  it('should be created', inject([EcgDataProcessingService], (service: EcgDataProcessingService) => {
    expect(service).toBeTruthy();
  }));
});
