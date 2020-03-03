import { TestBed } from '@angular/core/testing';

import { AjoutdemandeService } from './ajoutdemande.service';

describe('AjoutdemandeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjoutdemandeService = TestBed.get(AjoutdemandeService);
    expect(service).toBeTruthy();
  });
});
