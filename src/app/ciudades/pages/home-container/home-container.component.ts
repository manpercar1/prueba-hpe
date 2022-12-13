import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MensajeService } from '../../../shared/services/messages/mensaje.service';
import { SharedConstants } from '../../../shared/constants/shared-constants';
import { Severity } from '../../../shared/constants/severity';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent {

  public idCiudadSeleccionada: number = 0;

  constructor(private router: Router, private mensajeService: MensajeService) {}

  ciudadSeleccionada(idCiudad: number): void {
    this.idCiudadSeleccionada = idCiudad;
  }

  ciudadEliminada(): void {
    this.idCiudadSeleccionada = 0;
  }

  logOut(): void {
    this.mensajeService.addMensaje('Hasta luego, ' + localStorage.getItem(SharedConstants.LOCAL_STORAGE.TOKEN_USUARIO), Severity.INFO);
    this.router.navigate(['/auth/login']);
  }

}
