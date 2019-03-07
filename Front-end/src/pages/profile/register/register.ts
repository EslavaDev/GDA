import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MediaProvider } from './../../../providers/media'
import { AlertsProvider } from './../../../providers/alert'

import { Validators, FormBuilder, FormGroup } from "@angular/forms";

import { Register } from './../../../interfaces/auth'

import { LoginPage } from '../../auth/login/login';
import {  AuthTecni} from "../../../providers/api/authTecni";
import { PostRegisterPage } from '../post_register/postRegister';
import { HomePage  } from "../../home/home";
import axios from "axios";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  footer_text1:string = 'Al continuar confirma y acepta los';
  footer_text2:string = 'Términos y Condiciones';
  footer_text3:string = 'Politicas de Privacidad';
  private user_register:FormGroup;
  
  constructor(
    public navCtrl: NavController,
    public media: MediaProvider,
    public alert: AlertsProvider,
    private formbuilder: FormBuilder,
    private apires: AuthTecni
    
  ) {
    this.user_register = this.__Formregister();

  }

  __Formregister(){
     return this.formbuilder.group({
       name: ['',Validators.required],
       lastname: ['',Validators.required],
       date: ['', Validators.required],
       identification: ['', Validators.required],
       email: ['', Validators.required],
       password: ['', Validators.required],
       password2: ['', Validators.required],
       type: ['tecnico'],
       firetoken: localStorage.getItem('nirvana'),
       usertype: ['3']
     })
  }

  takePicture(){
    this.media.takePicture()
  }

  choosePicture(){

  }

  goBack(){
    this.navCtrl.setRoot(LoginPage)
  }

  postRegister(data:Register){
    let pass = data.password2

    
      this.apires.register(data)
      .then(res => res.json())
      .catch(error => console.error(error))
      .then(response => {
        if (response.ok == false) {
          this.alert.showAlert('Error',response.message)
          
        }else {
          localStorage.setItem('tecnico', JSON.stringify(response))
          this.navCtrl.setRoot(HomePage)
        }
        
        
        console.log(response)})
    
    console.log(data.password2)
    

  }



}
