import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperaturePipe'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number): string | null {

    if(value && !isNaN(value)){
    
      // Conversión de Kelvin a Celsius
      return (value - 273.15).toFixed(2);
    
    }

    return null;
  }

}
