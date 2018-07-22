import { TestBed, inject } from '@angular/core/testing';

import { ListarPlanetasService } from './listar-planetas.service';

describe('ListarPlanetasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarPlanetasService]
    });
  });

  it('should be created', inject([ListarPlanetasService], (service: ListarPlanetasService) => {
    expect(service).toBeTruthy();
  }));
});
