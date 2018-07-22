import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePlanetaComponent } from './detalhe-planeta.component';

describe('DetalhePlanetaComponent', () => {
  let component: DetalhePlanetaComponent;
  let fixture: ComponentFixture<DetalhePlanetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhePlanetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhePlanetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
