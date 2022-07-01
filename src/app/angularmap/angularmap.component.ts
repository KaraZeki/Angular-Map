import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-angularmap',
  templateUrl: './angularmap.component.html',
  styleUrls: ['./angularmap.component.css']
})
export class AngularmapComponent implements OnInit {


  title = 'firstApp';

  lat = 41.038898;
  long = 28.809862;
  zoom=7;

  markers = [
        {
            lat: 41.038898,
            lng: 28.809862,
            label: 'Istanbul'
        },
        {
            lat: 38.454793,
            lng: 27.313786,
            label: 'Izmir'
        },
        {
            lat: 36.995697,
            lng: 35.215846,
            label: 'Rajkot'
        }
    ];
  constructor() { }


  ngOnInit(): void {
    // const mapProperties = {
    //   center: new google.maps.LatLng(this.lat, this.lng),
    //   zoom: 2,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    // this.markers.forEach(location => {
    //   var marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(location.lat, location.lng),
    //     map: this.map
    //   });
    // });
  }

}
