import { BrowserModule  } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { HttpClientModule  } from "@angular/common/http";

import { MyApp } from './app.component'

import { HomePage } from '../pages/home/home'
import { ListPage } from '../pages/list/list'

import { AUTH_MODULE } from './../pages/auth/index'
import { PROFILE_MODULE } from './../pages/profile/index'
import { SERVICE_MODULE } from './../pages/service/index'
import { SERVICE_COTIZAR } from './../pages/contizar/index'
import { PAGE_APLAZAR } from "./../pages/agenda/index";
import { CIERRE_DIA } from "./../pages/service_cierre/index";
import { MODULE_RESERVAS } from "./../pages/reservas/index";
import { MODULE_APLAZADO } from "./../pages/aplazados/index";


import { MediaProvider } from './../providers/media'
import { PROVIDER_MODULE} from "./../providers/index";
import { API_REST } from "./../providers/api";


import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { Camera } from '@ionic-native/camera'
import { FCM } from '@ionic-native/fcm'
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
import { Geolocation } from '@ionic-native/geolocation';
import { Calendar } from "@ionic-native/calendar";
import { SignaturePadModule } from "angular2-signaturepad";


@NgModule({
  declarations: [
    MyApp,
    ...AUTH_MODULE,
    ...PROFILE_MODULE,
    ...SERVICE_MODULE,
    ...SERVICE_COTIZAR,
    ...PAGE_APLAZAR,
    ...CIERRE_DIA,
    ...MODULE_RESERVAS,
    ...MODULE_APLAZADO,
    HomePage,
    ListPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SignaturePadModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ...AUTH_MODULE,
    ...PROFILE_MODULE,
    ...SERVICE_MODULE,
    ...SERVICE_COTIZAR,
    ...PAGE_APLAZAR,
    ...CIERRE_DIA,
    ...MODULE_RESERVAS,
    ...MODULE_APLAZADO,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    MediaProvider,
    Calendar,
    Geolocation,
    FCM,
    LocalNotifications,
    PROVIDER_MODULE,
    API_REST
  ]
})
export class AppModule {}
