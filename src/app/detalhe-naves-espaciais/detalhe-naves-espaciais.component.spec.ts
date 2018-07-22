import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheNavesEspaciaisComponent } from './detalhe-naves-espaciais.component';

describe('DetalheNavesEspaciaisComponent', () => {
  let component: DetalheNavesEspaciaisComponent;
  let fixture: ComponentFixture<DetalheNavesEspaciaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheNavesEspaciaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheNavesEspaciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
