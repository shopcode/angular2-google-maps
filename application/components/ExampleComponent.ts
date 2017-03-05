import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Config } from './../common/config';

@Component({
  selector: '#example-component',
  templateUrl: './application/views/example/index.html',
  directives: [ ROUTER_DIRECTIVES ]
})
 
export class ExampleComponent {

  private config = new Config();

  constructor(private http: Http, private router: Router) {}

}