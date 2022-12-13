import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from '../../auth-routing.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        LoginComponent 
      ],
      imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Formulario inválido', () => {
    const usuario = component.form.controls['usernameField'];
    usuario.setValue('manpercar1');
    
    expect(component.form.invalid).toBeTruthy();
  })

  it('Formulario válido', () => {
    const usuario = component.form.controls['usernameField'];
    const password = component.form.controls['passwordField'];
    usuario.setValue('manpercar1');
    password.setValue('manuel123456');

    expect(component.form.invalid).toBeFalsy();
  })

});
