import { TestBed, inject } from '@angular/core/testing';

import { ListarNavesEspaciaisService } from './listar-naves-espaciais.service';

describe('ListarNavesEspaciaisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarNavesEspaciaisService]
    });
  });

  it('should be created', inject([ListarNavesEspaciaisService], (service: ListarNavesEspaciaisService) => {
    expect(service).toBeTruthy();
  }));
});
