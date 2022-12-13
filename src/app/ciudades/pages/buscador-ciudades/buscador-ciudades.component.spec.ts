import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgbTypeaheadModule, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { CiudadesRoutingModule } from '../../ciudades-routing.module';
import { CiudadesFavoritasComponent } from '../ciudades-favoritas/ciudades-favoritas.component';
import { HomeContainerComponent } from '../home-container/home-container.component';
import { MapComponent } from '../map/map.component';

import { BuscadorCiudadesComponent } from './buscador-ciudades.component';
import { CiudadesService } from '../../services/ciudades.service';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('BuscadorCiudadesComponent', () => {
  let component: BuscadorCiudadesComponent;
  let fixture: ComponentFixture<BuscadorCiudadesComponent>;

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

    fixture = TestBed.createComponent(BuscadorCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
