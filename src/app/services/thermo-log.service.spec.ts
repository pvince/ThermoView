import { TestBed } from '@angular/core/testing';

import { ThermoLogService } from './thermo-log.service';

describe('ThermoLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThermoLogService = TestBed.get(ThermoLogService);
    expect(service).toBeTruthy();
  });
});
