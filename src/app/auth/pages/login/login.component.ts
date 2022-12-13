import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedConstants } from '../../../shared/constants/shared-constants';
import { AuthService } from '../../services/auth.service';
import { MensajeService } from '../../../shared/services/messages/mensaje.service';
import { Severity } from '../../../shared/constants/severity';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Constantes
  static readonly PASS_ICON_EYE_SLASH = 'pi pi-eye-slash';
  static readonly PASS_ICON_EYE = 'pi pi-eye';
  static readonly INPUT_TYPE_TEXT = 'text'
  static readonly INPUT_TYPE_PASSWORD = 'password'
  static readonly LABEL_INICIAR_SESION = 'Iniciar sesión';
  static readonly LABEL_ENVIANDO = 'Enviando...';


  // Variables
  public username: string = SharedConstants.GENERAL.BLANK;
  public password: string = SharedConstants.GENERAL.BLANK;

  public form: FormGroup = new FormGroup({});

  public formularioEnviado: boolean = false;
  public labelBotonEnviar: string = LoginComponent.LABEL_INICIAR_SESION;

  public showPassword: boolean = false;

  public inicioDeSesionProcesado: boolean = false;


  // Getters
  get passIcon() {
    return this.showPassword ? LoginComponent.PASS_ICON_EYE_SLASH : LoginComponent.PASS_ICON_EYE;
  }

  get inputType() {
    return this.showPassword ? LoginComponent.INPUT_TYPE_TEXT : LoginComponent.INPUT_TYPE_PASSWORD;
  }

  constructor(
    private authService: AuthService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private mensajes: MensajeService
  ) {
    this.form = this.formBuilder.group({
      usernameField: [this.username, Validators.required],
      passwordField: [this.password, Validators.required],
    });
  }
  
  ngOnInit(): void {
    localStorage.removeItem(SharedConstants.LOCAL_STORAGE.TOKEN_USUARIO);
  }

  onLogin(): void {
    this.formularioEnviado = true;
    this.labelBotonEnviar = LoginComponent.LABEL_ENVIANDO;
    this.authService
      .login(this.form.value.usernameField, this.form.value.passwordField)
      .subscribe({
        next: (data: string) => {
        
          this.router.navigate(['/home']);

          localStorage.setItem(SharedConstants.LOCAL_STORAGE.TOKEN_USUARIO, data);
          
          this.inicioDeSesionProcesado = true;

          //Mostramos un mensaje de éxito al iniciar sesión
          this.mensajes.addMensaje('Bienvenido, ' + data, Severity.SUCCESS);
        },
        error: (err) => {

          this.formularioEnviado = false;
          this.labelBotonEnviar = LoginComponent.LABEL_INICIAR_SESION;
          this.inicioDeSesionProcesado = true;
          console.error(err);
          this.mensajes.addMensaje(err, Severity.ERROR);
        }
      });
  }

}
