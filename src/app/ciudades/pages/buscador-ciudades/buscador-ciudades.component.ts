import { Component, Input, SimpleChanges } from '@angular/core';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction } from 'rxjs';
import * as data from '../../../../assets/data/cities.json';
import { Ciudad } from '../../interfaces/ciudad';
import { WeatherReport } from '../../interfaces/weatherReport';
import { CiudadesService } from '../../services/ciudades.service';
import { environment } from '../../../../environments/environment';
import { MensajeService } from '../../../shared/services/messages/mensaje.service';
import { Severity } from '../../../shared/constants/severity';

@Component({
  selector: 'app-buscador-ciudades',
  templateUrl: './buscador-ciudades.component.html',
  styleUrls: ['./buscador-ciudades.component.css']
})
export class BuscadorCiudadesComponent {

  @Input() idCiudadSeleccionada: number = 0;

  // Variables
  
  // Se debe guardar los datos del JSON de esta forma, debido a que Typescript le da un formato
  // a los datos al leerlos del archivo que no es apto para guardarlo en un array.
  private jsonContent: any = data
  public ciudades: Ciudad[] = this.jsonContent.default
  
  public weatherReport: WeatherReport | undefined = undefined;
  
  public WEATHER_INCONS_URL_BEG = environment.weatherIconsURLBeg;
  public WEATHER_INCONS_URL_END = environment.weatherIconsURLEnd;
  
  constructor(private ciudadesService: CiudadesService, private mensajeService: MensajeService) {}

  public formatter = (x: { name: string }) => x.name;

  ngOnChanges(changes: SimpleChanges) {

    const currentValue: number = changes['idCiudadSeleccionada'].currentValue;
        
    if (currentValue != 0 && currentValue != undefined) {
      this.getWeatherReport(currentValue);
    } else {
      this.weatherReport = undefined
    }
  }

  public getWeatherReport(idCiudad: number): void {
    this.ciudadesService.detallesCiudadFavorita(idCiudad)
      .subscribe({
        next: (data: WeatherReport) => {
          this.weatherReport = data;
        },
        error: (error) => {
          console.error(error);
          this.mensajeService.addMensaje(
            'No se ha podido obtener el informe del tiempo para esta ciudad', 
            Severity.ERROR
          );
        }
      })
  }

  public onSelect(event: NgbTypeaheadSelectItemEvent) {
    this.ciudadesService.addCiudadFavorita(event.item);
  }

	public search: OperatorFunction<string, Ciudad[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term.length < 2 ? [] : this.ciudades.filter((v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);

}
