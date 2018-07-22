import { TestBed, inject } from '@angular/core/testing';

import { DetalhesNavesEspaciaisService } from './detalhe-naves-espaciais.service';

describe('DetalheNavesEspaciaisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalhesNavesEspaciaisService]
    });
  });

  it('should be created', inject([DetalhesNavesEspaciaisService], (service: DetalhesNavesEspaciaisService) => {
    expect(service).toBeTruthy();
  }));
});
