import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPlanetasComponent } from './listar-planetas.component';

describe('ListarPlanetasComponent', () => {
  let component: ListarPlanetasComponent;
  let fixture: ComponentFixture<ListarPlanetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPlanetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
