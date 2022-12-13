# MyCitiesWeather

Este es un proyecto desarrollado para la prueba técnica propuesta por HPE.

Ha sido llamado MyCitiesWeather, ya que se trata de una aplicación que muestra los datos del tiempo de ciudades que hayan sido seleccionadas previamente por el usuario y hayan sido guardadas en una lista de ciudades favoritas.

De cada ciudad, se muestran datos como la temperatura (temperatura actual, máxima y mínima...), el clima y otros datos atmosféricos como el viento o la humedad. Además, se muestra, mediante la API de Google Maps, su ubicación en el mapa.

## Detalles de las versiones de los elementos del proyecto

- Versión de Angular: 15.0.3
- Versión de Angular CLI: 15.0.3
- Versión de Node: 18.12.1
- Versión npm: 8.19.2
- Versión de Typescript: 4.8.4

## Instalación y ejecución

1. Clonar el proyecto en una carpeta local cualquiera con el comando `git clone https://github.com/manpercar1/prueba-hpe.git`.
2. Abrir la consola de comandos y navegar hasta la ruta de la carpeta del proyecto. Instalar los paquetes necesarios para la ejecución del proyecto con el comando `npm install` o `npm i`.
3. Una vez termine la instalación, ejecutar el proyecto con `ng serve`.
4. Para ejecutar de las pruebas del proyecto, primero, parar la ejecución del proyecto cancelando en la ventana de comandos. Luego, ejecutar el comando `ng test`.

## Características del proyecto

- Funcionalidad completa de inicio de sesión.
- Guardado de usuario en localStorage a modo de "token" para controlar la sesión.
- Guard implementado para la gestión de la sesión (sólo se puede acceder al home si existe un token en el localStorage que simbolice que el usuario ha iniciado sesión).
- Búsqueda de ciudades con select filtrable tipo typeahead diseñado con NgBootstrap.
- Componentes varios de PrimeNG.
- Proyecto modularizado: 
    - Módulo Shared para los elementos compartidos en todo el proyecto
    - Módulo PrimeNG para importar únicamente los componentes de PrimeNG
    - Módulo Ciudades para los componentes y servicios que conforman el core del proyecto.
    - Módulo Auth para los componentes y servicios que conforman el inicio de la sesión y la gestión de la misma.
- LazyLoad implementado para las rutas del proyecto.
- Uso de constantes para mejorar la usabilidad del código.
- Uso de variables de entorno con los environment.
- Uso del Google Maps API con API Key real.
- Implementación y configuración de Karma y Jasmine para las pruebas unitarias.