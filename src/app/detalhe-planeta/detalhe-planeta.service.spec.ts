import { TestBed, inject } from '@angular/core/testing';

import { DetalhePlanetaService } from './detalhe-planeta.service';

describe('DetalhePlanetaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalhePlanetaService]
    });
  });

  it('should be created', inject([DetalhePlanetaService], (service: DetalhePlanetaService) => {
    expect(service).toBeTruthy();
  }));
});
