import { ListarPersonagensModule } from './listar-personagens.module';

describe('ListarPersonagensModule', () => {
  let listarPersonagensModule: ListarPersonagensModule;

  beforeEach(() => {
    listarPersonagensModule = new ListarPersonagensModule();
  });

  it('should create an instance', () => {
    expect(listarPersonagensModule).toBeTruthy();
  });
});
