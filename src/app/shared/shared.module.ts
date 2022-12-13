import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';
import { ToastrModule } from 'ngx-toastr';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { CapitalizeFirstLetterPipe } from './pipes/capitalize-first-letter.pipe';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    PrimengModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      disableTimeOut: true,
      newestOnTop: false,
      easeTime: 500
  }),
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    PrimengModule,
    ToastrModule,
    TemperaturePipe,
    CapitalizeFirstLetterPipe
  ],
  declarations: [
    TemperaturePipe,
    CapitalizeFirstLetterPipe
  ]
})
export class SharedModule { }
