import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNavesEspaciaisComponent } from './listar-naves-espaciais.component';

describe('ListarNavesEspaciaisComponent', () => {
  let component: ListarNavesEspaciaisComponent;
  let fixture: ComponentFixture<ListarNavesEspaciaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarNavesEspaciaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarNavesEspaciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
