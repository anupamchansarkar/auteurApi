import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestureConfig } from '@angular/material';
import { ReactiveFormsModule }    from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {  PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { InMemoryDataService } from './shared/inmemory-db/inmemory-db.service';
import { SharedModule } from './shared/shared.module';
import { ErrorHandlerService } from './shared/services/error-handler.service';

import { rootRouterConfig } from './app.routing';
import { AppComponent } from './app.component';

import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { AlertComponent } from './_components';
import { fakeBackendProvider } from './_helpers';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FolderComponent } from './folder/folder.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    PerfectScrollbarModule,
    SharedMaterialModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true}),
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  declarations: [AppComponent, 
                 LoginComponent,
                 AlertComponent,
                 RegisterComponent,
                 FolderComponent,
  ],
  providers: [
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }