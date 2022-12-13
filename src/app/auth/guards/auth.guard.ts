import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { SharedConstants } from '../../shared/constants/shared-constants';
import { MensajeService } from '../../shared/services/messages/mensaje.service';
import { Severity } from '../../shared/constants/severity';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private mensajeService: MensajeService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const token: string | null = localStorage.getItem(SharedConstants.LOCAL_STORAGE.TOKEN_USUARIO);

    if (token) return true;

    this.router.navigate(['/auth/login']);

    this.mensajeService.addMensaje('Acceso no autorizado.', Severity.ERROR);

    return false;
  }
  
}
