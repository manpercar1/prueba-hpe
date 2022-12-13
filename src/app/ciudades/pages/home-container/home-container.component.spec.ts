import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { CiudadesRoutingModule } from '../../ciudades-routing.module';
import { BuscadorCiudadesComponent } from '../buscador-ciudades/buscador-ciudades.component';
import { CiudadesFavoritasComponent } from '../ciudades-favoritas/ciudades-favoritas.component';
import { MapComponent } from '../map/map.component';
import { RouterTestingModule } from "@angular/router/testing";

import { HomeContainerComponent } from './home-container.component';

describe('HomeContainerComponent', () => {
  let component: HomeContainerComponent;
  let fixture: ComponentFixture<HomeContainerComponent>;

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
        RouterTestingModule,
        CiudadesRoutingModule,
        FormsModule,
        NgbTypeaheadModule,
        SharedModule,
        GoogleMapsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
