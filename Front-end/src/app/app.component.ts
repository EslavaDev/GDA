import { Component, ViewChild } from '@angular/core'
import { Nav, Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { FCM } from '@ionic-native/fcm';

import firebase from "firebase/app";

import { firebaseConfig } from "../app/firebase.config";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
import { AlertsProvider } from "../providers/alert";

import { HomePage } from '../pages/home/home'
//import { ListPage } from '../pages/list/list'
import { LoginPage } from './../pages/auth/login/login'
//import { RegisterPage } from './../pages/profile/register/register'
//import { pageAplazar } from './../pages/agenda//aplazar/aplazar';
import { MapPage } from "./../pages/service/map-camino/map";
import { pageProfilePhoto } from "./../pages/profile/profilePhoto/profilePhotos";
import {pageCierreDia } from "../pages/service_cierre/cierre-del-dia/cierre-dia";
// import { MisReservasPage } from "../pages/reservas/mis-reservas/misreservas";
// import { ReservasPage } from "../pages/reservas/reservados/reserva";
// import { AplazadoPage } from "../pages/aplazados/aplazar/aplazado";
// import { PageSend } from "../pages/contizar/send-cotizacion/send";
// import { PageResult } from "../pages/contizar/result/result";
import {  MyServicePage } from "../pages/contizar/my-service/my-service";
//FOR THE LAYOUT FAST
//import { AddDocumentsPage } from './../pages/profile/post_register/add_documents/addDocuments';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage; //initial route

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public fcm: FCM,
    private localNotifications: LocalNotifications,
    private alert: AlertsProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inmediatos', component: HomePage},
      { title: "Mis servicios", component: MyServicePage},
      { title: 'Cierre del día', component: pageCierreDia},
      { title: 'Perfil', component: pageProfilePhoto },
      { title: 'Cerrar Sesión', component: LoginPage}
    

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {

      if (this.platform.is('cordova')) {

        this.fcm.subscribeToTopic('all').then(res =>{
          console.log('subscribeToTopic')
        })

        this.fcm.getToken().then(token => {
          console.log('fire token ' + token)
          localStorage.setItem('nirvana',token);
        })

        this.fcm.onNotification().subscribe(data => {
          this.buildNotification(data, data.wasTapped)
        })

        
      }

      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      firebase.initializeApp(firebaseConfig)
    });


  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  buildNotification(data, mode){
    if(data){
      if(mode){
        console.log('Received in background ', JSON.stringify(data))
        this.localNotifications.schedule({
          id: 1,
          title: data.title,
          text: data.body
        })

      }else{
        console.log('Received in foreground ', JSON.stringify(data))
        const id = data.id
        console.log(id)
        this.alert.showConfirm(data.title , data.body, 'ver', 'cancelar').then(res =>{
          if(res === 1){
            this.nav.push(HomePage)
          }else{
            this.nav.setRoot(HomePage)
          }
        })
      }
    }
  }

}
