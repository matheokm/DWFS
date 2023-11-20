import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AuthModule} from "@auth0/auth0-angular";
import {AppRoutingModule} from "./app-routing.module";
import { PublicComponent } from './component/public/public.component';
import { PrivateComponent } from './component/private/private.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Se agrega modulo Auth (auth0-angular) seguido del json de configuración
    AuthModule.forRoot({
      domain: 'dev-melg4kpbxr8ftwv1.us.auth0.com',
      clientId: 'WKURwwav1CbAWTr84Yy7ehO0CAx1haoZ',
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
