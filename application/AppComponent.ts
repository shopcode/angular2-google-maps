import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
 
@Component({
  selector: 'my-app',
  templateUrl: './application/views/layouts/app.html',
  directives: [ ROUTER_DIRECTIVES ]
})
 
export class AppComponent { }