import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/Storage';
import { HttpClientModule, HttpClient ,HttpHandler} from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';





import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/Authentication.service';

import {ExchangedataService} from "../app/services/exchangedata.service";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(),    AppRoutingModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
   
    HttpClient,
    HTTP,
    Storage,
    ExchangedataService,
    AuthGuardService,
    AuthenticationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
