import { ListarPlanetasModule } from './listar-planetas.module';

describe('ListarPlanetasModule', () => {
  let listarPlanetasModule: ListarPlanetasModule;

  beforeEach(() => {
    listarPlanetasModule = new ListarPlanetasModule();
  });

  it('should create an instance', () => {
    expect(listarPlanetasModule).toBeTruthy();
  });
});
