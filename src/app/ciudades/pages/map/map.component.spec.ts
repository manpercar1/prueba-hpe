import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { CiudadesRoutingModule } from '../../ciudades-routing.module';
import { BuscadorCiudadesComponent } from '../buscador-ciudades/buscador-ciudades.component';
import { HomeContainerComponent } from '../home-container/home-container.component';
import { CiudadesFavoritasComponent } from '../ciudades-favoritas/ciudades-favoritas.component';

import { MapComponent } from './map.component';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

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

    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
