import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() ciudad_lat: number = 0
  @Input() ciudad_lng: number = 0

  public centro: google.maps.LatLngLiteral = {
    lat: 0,
    lng: 0,
  }

  public zoom: number = 12;

  public mapOptions: google.maps.MapOptions = {
    scrollwheel: false
  }

  ngOnInit(): void {
    this.centro.lat = this.ciudad_lat;
    this.centro.lng = this.ciudad_lng;
  }

  ngOnChanges(changes: SimpleChanges) {

    const currentValueLat: number = changes['ciudad_lat'].currentValue;
    const currentValueLng: number = changes['ciudad_lng'].currentValue;

    this.centro = {
      lat: currentValueLat,
      lng: currentValueLng
    }

  }

}
