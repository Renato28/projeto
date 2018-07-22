import { TestBed, inject } from '@angular/core/testing';

import { DetalhePersonagemService } from './detalhe-personagem.service';

describe('DetalhePersonagemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalhePersonagemService]
    });
  });

  it('should be created', inject([DetalhePersonagemService], (service: DetalhePersonagemService) => {
    expect(service).toBeTruthy();
  }));
});
