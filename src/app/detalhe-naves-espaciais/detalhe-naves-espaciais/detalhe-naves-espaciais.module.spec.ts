import { DetalheNavesEspaciaisModule } from './detalhe-naves-espaciais.module';

describe('DetalheNavesEspaciaisModule', () => {
  let detalheNavesEspaciaisModule: DetalheNavesEspaciaisModule;

  beforeEach(() => {
    detalheNavesEspaciaisModule = new DetalheNavesEspaciaisModule();
  });

  it('should create an instance', () => {
    expect(detalheNavesEspaciaisModule).toBeTruthy();
  });
});
