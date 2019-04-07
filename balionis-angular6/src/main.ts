import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {LicenseManager} from 'ag-grid-enterprise';

if (environment.production) {
  enableProdMode();
}

LicenseManager.setLicenseKey('INSERT_VALID_LICENSE_KEY_HERE');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

