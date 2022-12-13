import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { CiudadesRoutingModule } from '../../ciudades-routing.module';
import { BuscadorCiudadesComponent } from '../buscador-ciudades/buscador-ciudades.component';
import { HomeContainerComponent } from '../home-container/home-container.component';
import { MapComponent } from '../map/map.component';

import { CiudadesFavoritasComponent } from './ciudades-favoritas.component';

describe('CiudadesFavoritasComponent', () => {
  let component: CiudadesFavoritasComponent;
  let fixture: ComponentFixture<CiudadesFavoritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeContainerComponent,
        CiudadesFavoritasComponent,
        BuscadorCiudadesComponent,
        MapComponent
      ],
      imports: [
        CommonModule,
        CiudadesRoutingModule,
        FormsModule,
        NgbTypeaheadModule,
        SharedModule,
        GoogleMapsModule
      ]
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
