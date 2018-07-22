import { DetalhePlanetaModule } from './detalhe-planeta.module';

describe('DetalhePlanetaModule', () => {
  let detalhePlanetaModule: DetalhePlanetaModule;

  beforeEach(() => {
    detalhePlanetaModule = new DetalhePlanetaModule();
  });

  it('should create an instance', () => {
    expect(detalhePlanetaModule).toBeTruthy();
  });
});
