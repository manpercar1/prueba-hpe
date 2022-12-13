import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorCiudadesComponent } from './buscador-ciudades.component';

describe('BuscadorCiudadesComponent', () => {
  let component: BuscadorCiudadesComponent;
  let fixture: ComponentFixture<BuscadorCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorCiudadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
