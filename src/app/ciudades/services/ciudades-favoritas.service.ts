import { Injectable } from '@angular/core';
import { Ciudad } from '../interfaces/ciudad';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
import { SharedConstants } from '../../shared/constants/shared-constants';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { WeatherReport } from '../interfaces/weatherReport';

@Injectable({
  providedIn: 'root'
})
export class CiudadesFavoritasService {

  // Constantes
  static readonly LOCALSTORAGE_CIUDADES = SharedConstants.LOCAL_STORAGE.CIUDADES_FAVORITAS;
  static readonly WEATHER_API_KEY = environment.weatherAPIKEY;

  private ciudadesFavoritas: Ciudad[] = []

  get ciudades(): Ciudad[] {
    return [...this.ciudadesFavoritas];
  }

  constructor(private http: HttpClient) {
    const ciudadesLocalStorage: Ciudad[] | null = JSON.parse(localStorage.getItem(CiudadesFavoritasService.LOCALSTORAGE_CIUDADES) as string);
    if (ciudadesLocalStorage) {
      this.ciudadesFavoritas = ciudadesLocalStorage;
    }

  }

  addCiudadFavorita(ciudad: Ciudad): void {

    if (this.checkCiudadExistInFavoritas(this.ciudadesFavoritas, ciudad)) {
      Swal.fire({
        title: 'Error',
        text: 'Ya has añadido esta ciudad a la lista de ciudades favoritas',
        icon: 'error',
        confirmButtonText: '¡Vale!'
      })
    } else {

      // Añadimos la ciudad a la lista de ciudades
      this.ciudadesFavoritas.push(ciudad);

      // La añadimos también al localStorage
      localStorage.setItem(CiudadesFavoritasService.LOCALSTORAGE_CIUDADES, JSON.stringify(this.ciudadesFavoritas));

      Swal.fire({
        title: 'Ciudad añadida',
        text: 'Has añadido ' + ciudad.name + ' a la lista de ciudades favoritas',
        icon: 'success',
        confirmButtonText: '¡Vale!'
      })
    }
  }

  eliminarCiudadFavorita(ciudad: Ciudad): void {

    // Eliminamos la ciudad recibida de la lista de ciudades favoritas
    const ciudadIndex: number = this.ciudadesFavoritas.indexOf(ciudad, 0);

    if (ciudadIndex > -1) {
      this.ciudadesFavoritas.splice(ciudadIndex, 1);
    }

    // Actualizamos el localStorage con la nueva lista
    localStorage.setItem(CiudadesFavoritasService.LOCALSTORAGE_CIUDADES, JSON.stringify(this.ciudadesFavoritas));

  }


  detallesCiudadFavorita(idCiudad: number): Observable<WeatherReport> {
    
    return this.http.get<WeatherReport>(
      'http://api.openweathermap.org/data/2.5/weather?id=' 
      + idCiudad 
      + '&appid=' 
      + CiudadesFavoritasService.WEATHER_API_KEY
      + '&lang=es');

  }

  
  private checkCiudadExistInFavoritas(ciudadesFavoritas: Ciudad[], nuevaCiudad: Ciudad): boolean {
    
    for(let ciudad of ciudadesFavoritas) {
      if (ciudad.id === nuevaCiudad.id) return true;
    }

    return false;

  }

}
