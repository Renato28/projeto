import { TestBed, inject } from '@angular/core/testing';

import { ListarPersonagensService } from './listar-personagens.service';

describe('ListarPersonagensService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarPersonagensService]
    });
  });

  it('should be created', inject([ListarPersonagensService], (service: ListarPersonagensService) => {
    expect(service).toBeTruthy();
  }));
});
