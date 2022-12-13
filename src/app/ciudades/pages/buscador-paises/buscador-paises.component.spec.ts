import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorPaisesComponent } from './buscador-paises.component';

describe('BuscadorPaisesComponent', () => {
  let component: BuscadorPaisesComponent;
  let fixture: ComponentFixture<BuscadorPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorPaisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
