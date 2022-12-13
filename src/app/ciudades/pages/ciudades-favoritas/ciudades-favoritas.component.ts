import { Component, EventEmitter, Output } from '@angular/core';
import { CiudadesService } from '../../services/ciudades.service';
import { Ciudad } from '../../interfaces/ciudad';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SharedConstants } from '../../../shared/constants/shared-constants';

@Component({
  selector: 'app-ciudades-favoritas',
  templateUrl: './ciudades-favoritas.component.html',
  styleUrls: ['./ciudades-favoritas.component.css']
})
export class CiudadesFavoritasComponent {

  @Output('seleccionCiudad') seleccionCiudad: EventEmitter<number> = new EventEmitter<number>();
  @Output('eliminarCiudad') eliminarCiudad: EventEmitter<void> = new EventEmitter<void>();

  // Variables
  public ciudadActiva: string = SharedConstants.GENERAL.BLANK;

  // Getters
  get ciudades() {
    return this.ciudadesService.ciudades;
  }
  
  constructor(private ciudadesService: CiudadesService, private router: Router) {}

  onSelectCiudad(idCiudad: number) {
    this.ciudadActiva = idCiudad.toString();
    this.seleccionCiudad.emit(idCiudad);
  }

  async onDelete(ciudad: Ciudad) {

    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Se eliminará ' + ciudad.name + ' de tu lista de ciudades favoritas.',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Sí'
    })

    if(result.isConfirmed) {
      this.ciudadesService.eliminarCiudadFavorita(ciudad);

      Swal.fire({
        title: 'Ciudad eliminada',
        text: 'Has eliminado a ' + ciudad.name + ' de la lista de ciudades favoritas',
        icon: 'success',
        confirmButtonText: '¡Vale!'
      })

      this.seleccionCiudad.emit();
    }

  }

}
