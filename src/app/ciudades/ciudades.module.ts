import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiudadesRoutingModule } from './ciudades-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent } from './pages/home-container/home-container.component';
import { PaisesFavoritosComponent } from './pages/paises-favoritos/paises-favoritos.component';
import { BuscadorPaisesComponent } from './pages/buscador-paises/buscador-paises.component';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { MapComponent } from './pages/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    HomeContainerComponent,
    PaisesFavoritosComponent,
    BuscadorPaisesComponent,
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
export class CiudadesModule { }
