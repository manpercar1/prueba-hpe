import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class MensajeService {


    constructor(private toastr: ToastrService) { }

    /**
     * 
     * @description Muestra por la interfaz el mensaje del tipo que se le indica
     * 
     * @param mensaje Cuerpo del mensaje que se mostrará
     * @param severity Tipo del mensaje. Puede ser 'success', 'error', 'warning' o 'info'
     * 
     */
    addMensaje(mensaje: string, severity: string) {
        if (severity == "success") {
            this.toastr.success(mensaje, 'Éxito');
        } else if (severity == "error") {
            this.toastr.error(mensaje, 'Error');
        } else if (severity == "warning") {
            this.toastr.warning(mensaje, 'Alerta');
        } else if (severity == "info") {
            this.toastr.info(mensaje, 'Info');
        } else {
            this.toastr.show(mensaje);   //Mensaje default sin diseño
        }

        //Para borrar los mensajes uno por uno cada x milisegundos
        let intervalo: number = 3000;

        let timer = setInterval(() => {
            if (this.toastr.toasts.length > 0) {
                this.toastr.clear(this.toastr.toasts[0].toastId);
            } else {
                clearInterval(timer);
            }
        }, intervalo);
    }

    /**
     * @description Comprueba si hay mensajes (ya sean de error, éxito, etc.) que esperan ser lanzados cuando se inicie un componente, y lanzarlos si los hay.
     * @param severity  Tipo de mensaje que se va a lanzar (se recomienda usar la clase Severity.ts para evitar equivocaciones)
     */
    comprobarYLanzarErrores(severity: string) {
        if (history.state.mensaje) {
            this.addMensaje(history.state.mensaje, severity);
        }
    }
}
