import { provideRouter, RouterConfig } from '@angular/router';

import { MainComponent } from './../components/MainComponent';

const routes: RouterConfig = [
   { path: '', component: MainComponent }
];

export const appRouterProviders = [ provideRouter(routes) ];