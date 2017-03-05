import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Config } from './../common/config';

import { MapController } from './../controllers/MapController';

@Component({
  selector: '#main-component',
  templateUrl: './application/views/main/index.html',
  directives: [ ROUTER_DIRECTIVES, MapController ]
})
 
export class MainComponent {

  private config = new Config();

  constructor(private http: Http, private router: Router) {}

}