import { NavController,NavParams  } from 'ionic-angular';
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera , CameraOptions } from "@ionic-native/camera";
import { AlertController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { validarPage } from "../validarCotizacion/validar";
import { PageSend } from "../send-cotizacion/send";

import { serviceTecnico } from "./../../../interfaces/services";

import {  storage} from "firebase";
import { firebaseConfig } from "../../../app/firebase.config";





@Component({
  selector: 'page-cotizacion',
  templateUrl: 'cotizacion.html'

})

export class CotizarPage{


  user = {} as serviceTecnico;
  flag:boolean = false;
  myphoto:string;
  arrayImg = []
  icon:boolean = false
  viewphoto:any


  @ViewChild(Slides) slides: Slides;
  

  constructor(
    public navcntroller: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private camera:Camera,
    private actionSheetCtrl:AlertController ){
  }

 
  

  enviarcotizacion(){
    console.log(this.user,'esto es data',this.navParams.data,'datanav')
      const token = JSON.parse(localStorage.getItem('tecnico'))
      console.log(token)
      const datos = {
        id_cliente: this.user.id_cliente=this.navParams.data.servi.id_cliente['_id'],
        id_categoria: this.user.id_categoria=this.navParams.data.servi.id_categoria['_id'],
        id_tecnico: this.user.id_tecnico=token.id,
        desc_diagnostico: this.user.desc_diagnostico,
        posible_solucion: this.user.posible_solucion,
      }
      console.log(datos,'leo jimenez');

      //https://todoak.herokuapp.com/api/v1/auth/service/create-service
      const url = `https://todoak.herokuapp.com/api/v1/auth/service/create-service-tecnico/${this.navParams.data.servi._id}`
      console.log(url,'url')
      fetch(url,{
        method: 'PUT',
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          datos
        )
      }).then(resp => resp.json())
      .then(response =>{
        const succes = {
          ok: true,
          message: 'Has tomado este servicio',
          status: 200,
          response
        }
        console.log(succes)

        if(succes.ok == true){

          this.alert('Aviso',`${succes.message} por favor espere hasta que le avisen que ya esta el precio`);
          this.navcntroller.setRoot(PageSend,{id_servicio: response._id});

        }else{
          this.alert('Error',`Error! ${succes.response.message}`)
        }
        
       
        localStorage.setItem('service', response._id)
        console.log(localStorage.getItem('service'));

      })
      .catch((error) =>{
        console.log(error);
      })
  


  }


  agregarRecursos(){
    if(this.flag == false){
      this.flag = true


    }else{
      
       return this.flag = false
    } 

  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  takePicture(sourceType: number) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: sourceType,
      targetWidth: 800,
      targetHeight: 700,
      
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.icon = true;
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
      this.arrayImg.push(this.myphoto)
      
      

      
        this.arrayImg.map((item,index)=>{
        this.viewphoto = item
        console.log('item',item, 'index', index)
        console.log(this.viewphoto, '=============PELUCHE LA FOTO')
        let driver = localStorage.getItem('service')
        const i = `technical/${driver}/${index}`
        console.log(i,'LOLOLO I')
        const drivetecni = storage().ref(i)
        drivetecni.putString(item,'data_url')
        console.log(drivetecni,'soy el drivetecnico')
        
        })
       
      
      console.log(this.arrayImg)
     
     }, (err) => {
      // Handle error
     })
    
  }

  alert(title:string,msg:string){
    const alert = this.actionSheetCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['Cerrar']
    });
    alert.present();
  }
 
  activeCamera() {
    console.log('active la camera')
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Opciones',
      buttons: [
        {
          text: 'Tomar una foto',
          role: 'take a picture',
          handler: () => {
            this.takePicture(1);
          }
        },
        {
          text: 'Abrir galeria',
          handler: () => {
            this.takePicture(0);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Nothing')
          }
        }
      ]
    });

    actionSheet.present();

  }


}
