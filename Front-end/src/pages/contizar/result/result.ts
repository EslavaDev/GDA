import { NavController,NavParams  } from 'ionic-angular';
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera , CameraOptions } from "@ionic-native/camera";
import { AlertController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { SignaturePad } from "angular2-signaturepad/signature-pad";

import { ServiceTecni } from "../../../providers/api/serviceTecni";


import { serviceTecnico } from "./../../../interfaces/services";
import { HomePage } from "../../home/home";


import { storage} from "firebase";





@Component({
  selector: 'page-result',
  templateUrl: 'result.html'

})

export class PageResult{

  flag:boolean = false;
  myphoto:string;
  arrayImg = []
  icon:boolean = false
  viewphoto:any


  @ViewChild(Slides) slides: Slides;
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  private signaturePadOptions: Object = {
    'minWidth': 6,
    'canvasWidth': 290,
    'canvasHeight': 300
  };
  

  constructor(
    public navcntroller: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private camera:Camera,
    private actionSheetCtrl:AlertController,
    private apirest:ServiceTecni ){
      
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
      targetHeight: 800,
      
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
        const i = `result/${driver}/${index}`
        console.log(i,'result I')
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


  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
     // invoke functions from szimek/signature_pad API
  }
 
  drawComplete() {
      
    console.log(this.signaturePad.toDataURL());
    const firma = this.signaturePad.toDataURL();
    let driver = localStorage.getItem('service')
     const i = `firma/${driver}`
     console.log(i,'LOLOLO I')
     const drivetecni = storage().ref(i)
     drivetecni.putString(firma,'data_url')
     console.log(drivetecni,'soy el drivetecnico')
   

  }
 
  drawStart() {
    console.log('begin drawing');
  }

  drawClear(){
    this.signaturePad.clear();
  }

  terminado(){

    const id = this.navParams.get('id_servicio')
    const body = {
      status: false
    }
    this.apirest.__PUT_state(id,body)
    .then(res => res.json())
    .catch(error => console.error(error))
    .then(response => {
      if(response.ok == true){
        this.navcntroller.setRoot(HomePage)

      }
    })

  }


}
