import { TestBed } from '@angular/core/testing';

import { SuiviSanteServiceService } from './suivi-sante-service.service';

describe('SuiviSanteServiceService', () => {
  let service: SuiviSanteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuiviSanteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
