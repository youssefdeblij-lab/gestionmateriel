import { TestBed } from '@angular/core/testing';

import { ExchangedataService } from './exchangedata.service';

describe('ExchangedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExchangedataService = TestBed.get(ExchangedataService);
    expect(service).toBeTruthy();
  });
});
