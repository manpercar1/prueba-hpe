export interface WeatherReport {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number; // m
    wind: Wind;
    clouds: Clouds;
    rain?: Rain;
    snow?: Snow;
    dt: number; // UTC
    sys: Sys;
    timezone: number; // UTC
    id: number;
    name: string;
    cod: number;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Main {
    temp: number; // ºC
    feels_like: number; // ºC
    temp_min: number; // ºC
    temp_max: number; // ºC
    pressure: number; // hPa
    humidity: number; // %
    sea_level?: number; // hPa
    grnd_level?: number; // hPa
}

export interface Wind {
    speed: number;  // m/s
    deg: number;    // º (dirección)
    gust: number;  // m/s (ráfagas)
}

export interface Clouds {
    all: number;    // % (Abundancia de nubes)
}

export interface Rain {
    "1h": number;   // mm (volumen de lluvia en la última hora)
    "3h": number;   // mm (volumen de lluvia en las últimas 3 horas)
}

export interface Snow {
    "1h": number;   // mm (volumen de nieve en la última hora)
    "3h": number;   // mm (volumen de nieve en las últimas 3 horas)
}

export interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number; // UTC
    sunset: number; // UTC
}

