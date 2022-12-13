import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Constantes
  static readonly MSG_USUARIO_INVALIDO = 'El usuario introducido no es válido.';

  // Variables
  private users: User[] = environment.users;

  constructor() { }

  public login(username: string, password: string): Observable<string> {

    const loggedUser: User = {
      username,
      password
    };

    return new Observable((observer) => {

      if(this.checkUser(loggedUser)) {
        observer.next(username);
      } else {
        observer.error(AuthService.MSG_USUARIO_INVALIDO);
      }

    });
  }

  /**
   * 
   * Comprueba que el usuario recibido como parámetro existe en la lista de usuarios registrados
   * en la aplicación.
   * 
   * @param loggedUser Usuario introducido en el formulario de inicio de sesión 
   * @returns Verdadero si existe en la lista de usuarios registrados, Falso en caso contrario.
   */
  private checkUser(loggedUser: User): boolean {

    for(let user of this.users) {

      if (user.username === loggedUser.username && user.password === loggedUser.password) {
        return true;
      }

    }

    return false;

  }
}
