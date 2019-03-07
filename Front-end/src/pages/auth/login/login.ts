import { Component } from '@angular/core'
import { NavController, AlertController, MenuController} from 'ionic-angular'

//import { AlertsProvider } from './../../../providers/alert'
import { AuthTecni } from "./../../../providers/api/authTecni";
import { ServiceTecni } from "./../../../providers/api/serviceTecni";
import { AlertsProvider } from "../../../providers/alert";

import { HomePage } from './../../home/home'
import { RegisterPage } from '../../profile/register/register'

import { Auth, Register } from './../../../interfaces/auth'
import { empty } from 'rxjs/Observer';

import { Validators, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  
  // user_register = { } as Register;
  private loginform: FormGroup;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public menuctrl: MenuController,
    private authTec:AuthTecni,
    private formBuilder: FormBuilder,
    private alert:AlertsProvider,
    private servic:ServiceTecni
  ) {

    this.menuctrl.swipeEnable(false);
    this.loginform = this._FormLogin();

  }


  

  _FormLogin(){
    return this.formBuilder.group({
      email: ['',Validators.required],
      password: ['', Validators.required],
      type: ['tecnico'],
      firetoken: localStorage.getItem('nirvana'),
      usertype: ['3']
    })
  }

  login(tecnic:Auth){

       console.log(tecnic)

       /*this.authTec.login(tecnic)
       .then(response => response.json())
       .catch(errpr => console.error(errpr))
       .then(response => {
        if (response.status == 402) {
          this.alert.showAlert('Error',response.message)
          
        }else if(response.status == 400){
          this.alert.showAlert('Error',response.err.message)
        }else{
          const tokens = {
            token: response.token,
            id: response.id,
            user: response.user.role,
            email: response.user.email
  
          }
          localStorage.setItem('tecnico', JSON.stringify(tokens))
        */  
          this.navCtrl.setRoot(HomePage)
        //}
        
       // console.log('tokens', tokens)
        //console.log('Success:', response.id)
        
      
    //})
    
}


  register(){
    this.navCtrl.setRoot(RegisterPage)
  }



  showAlert(mssg) {
    const alert = this.alertCtrl.create({
      title: 'Error al ingreso',
      subTitle: mssg,
      buttons: ['OK']
    });
    alert.present();
  
}


_close_session(){
   const tecni =  JSON.parse(localStorage.getItem('tecnico'))
   const body = {
    stateConect: false
   }

   this.servic._PUT_change_status(tecni.id, body)
   .then(res => res.json())
   .catch(error => console.error(error))
   .then(response => {
     localStorage.removeItem('tecnico')
     console.log(response)
   })
}

}
