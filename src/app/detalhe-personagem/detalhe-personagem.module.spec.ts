import { DetalhePersonagemModule } from './detalhe-personagem.module';

describe('DetalhePersonagemModule', () => {
  let detalhePersonagemModule: DetalhePersonagemModule;

  beforeEach(() => {
    detalhePersonagemModule = new DetalhePersonagemModule();
  });

  it('should create an instance', () => {
    expect(detalhePersonagemModule).toBeTruthy();
  });
});
