
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './AppComponent';
import { appRouterProviders } from './common/routes';

bootstrap(AppComponent, [
	appRouterProviders,
	HTTP_PROVIDERS
]).catch(err => console.error(err));