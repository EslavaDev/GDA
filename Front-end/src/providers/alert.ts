import { Injectable } from '@angular/core'
import { AlertController } from 'ionic-angular'

@Injectable()
export class AlertsProvider{

  constructor(public alertCtrl: AlertController){

  }

  showAlert(title, msg){
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    })
    alert.present()
  }

  showConfirm(title, msg, ok, cancel){
    return new Promise(resolve => {
      const confirm = this.alertCtrl.create({
        title: title,
        message: msg,
        buttons: [
          {
            text: cancel,
            handler: () => {
              resolve(0)
            }
          },
          {
            text: ok,
            handler: () => {
              resolve(1)
            }
          }
        ]
      });
      confirm.present();
    })    
  }
}