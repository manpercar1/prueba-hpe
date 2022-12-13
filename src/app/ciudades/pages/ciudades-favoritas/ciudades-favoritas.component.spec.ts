import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadesFavoritasComponent } from './ciudades-favoritas.component';

describe('CiudadesFavoritasComponent', () => {
  let component: CiudadesFavoritasComponent;
  let fixture: ComponentFixture<CiudadesFavoritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadesFavoritasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiudadesFavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
