
import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Config } from './../common/config';

declare var google: any;

@Component({
  selector: 'map-controller',
  templateUrl: './application/views/map/index.html',
  directives: [ ROUTER_DIRECTIVES ]
})
 
export class MapController {
  
  private map;
  private config = new Config();

  constructor(private http: Http, private router: Router) {}

  ngOnInit() {
    var center = new google.maps.LatLng(13.7246005, 100.6331108);
    var mapProp = {
      center: center,
      zoom: 5,
      zoomControl: true,
      maxZoom: 25,
      minZoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      fullscreenControl: true,
      fullscreenControlOptions:{
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      },
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_RIGHT
      },
      scaleControl: true,
      streetViewControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      },
      draggable: true
    };

    this.map = new google.maps.Map(document.getElementById("map"), mapProp);

    let infowindow = new google.maps.InfoWindow({
      content: 'Bangkok, Thailand',
      position: center,
      maxWidth: 450
    });

    var marker = new google.maps.Marker({
      position: center
    });

    google.maps.event.addListener(marker, 'click', () =>{
      this.map.setZoom(11);
      this.map.setCenter(marker.getPosition());
      infowindow.open(this.map, marker); // แสดง Infomation
    });

    marker.setMap(this.map);

  }

}