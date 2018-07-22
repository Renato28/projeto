import { ListarNavesEspaciaisModule } from './listar-naves-espaciais.module';

describe('ListarNavesEspaciaisModule', () => {
  let listarNavesEspaciaisModule: ListarNavesEspaciaisModule;

  beforeEach(() => {
    listarNavesEspaciaisModule = new ListarNavesEspaciaisModule();
  });

  it('should create an instance', () => {
    expect(listarNavesEspaciaisModule).toBeTruthy();
  });
});
