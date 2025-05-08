import { importProvidersFrom, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { ReactiveFormsModule } from '@angular/forms';


import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { provideServiceWorker } from '@angular/service-worker';

const dbConfig: DBConfig = {
  name: 'FurdoaruhaDB',
  version: 1,
  objectStoresMeta: [{
    store: 'products',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'price', keypath: 'price', options: { unique: false } },
      { name: 'image', keypath: 'image', options: { unique: false } }
    ]
  }]
};

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(
      ReactiveFormsModule,
      NgxIndexedDBModule.forRoot(dbConfig)
    ), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })
  ]
}).catch(err => console.error(err));
