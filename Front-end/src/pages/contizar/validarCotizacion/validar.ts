import { Component} from "@angular/core";
import { NavController, LoadingController } from 'ionic-angular';
import { pageAceptado } from "../cotizacion-aceptada/cotizacion-aceptada";


@Component({
    selector: 'page-validar',
  templateUrl: 'validar.html'
})

export class validarPage {

  
  constructor(public navcntroller: NavController,
     public navParams: NavController, 
     public loandinctrl: LoadingController ){
       this.timePage();
  }

  timePage(){
    let time_in_ms = 5000;
    let pageCotizar = setTimeout(() =>{
      this.cargaPage();
    },time_in_ms);
  }


  cargaPage(){
    const loader = this.loandinctrl.create({
      content: 'Por favor espere...',
      duration: 3000
    });
    loader.present();
    this.navcntroller.setRoot(pageAceptado);

  }

  


}