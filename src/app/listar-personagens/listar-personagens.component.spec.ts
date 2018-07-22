import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPersonagensComponent } from './listar-personagens.component';

describe('ListarPersonagensComponent', () => {
  let component: ListarPersonagensComponent;
  let fixture: ComponentFixture<ListarPersonagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPersonagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPersonagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
