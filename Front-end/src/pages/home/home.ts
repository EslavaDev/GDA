import { Component } from '@angular/core';
import { NavController, AlertController, NavParams} from 'ionic-angular';
import { text } from '@angular/core/src/render3/instructions';
import { MapPage } from '../../pages/service/map-camino/map';
import { CotizarPage } from "../../pages/contizar/cotizando/cotizacion";
import { LoginPage } from "../auth/login/login";
import { ServiceTecni } from "../../providers/api/serviceTecni";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

  service:any = [];
  numero:Number = 0;
  users:any = [];
  user:any;
  status:any = []
  flag:boolean;


  constructor(public navCtrl: NavController,
     public alertController: AlertController,
     public navps: NavParams,
     //private apitec:ServiceTecni
     ) {
     //  this.getService()
       
    console.log(this.user)

     }

ionViewDidLoad(){
  //this.getService();
  //  this.changeStatus()
  // console.log('3333')
}



showConfirm(service){
  console.log('entre peluche');
  const alerconfirm = this.alertController.create({
    title: 'Alerta Confirmacion',
    message: 'Esta seguro que desea tomar el servicio',
    buttons: [{
      text: 'Cancelar',
      handler: () =>{
        console.log('Hizo click aqui');
      }
    },
    {
      text: 'Aceptar',
      handler: () => {
        console.log('service', service);
        if(service.changeStatus.id == 2){
          
          const alert =  this.alertController.create({
            title: 'Aviso!',
            message: service.changeStatus.name,
            buttons: ['Cerrar']
          })

          alert.present();
        }else{
          this.navCtrl.setRoot(MapPage,{servi: service});
        }
        
        console.log('Aceptar click');
      }
    }
    ]
  });
  alerconfirm.present();
}

/*getService(){


  const tecnico = JSON.parse(localStorage.getItem('tecnico'))
  this.apitec._getService(tecnico.id)
  .then(res => {
    const data = res['data']
    console.log(data,'lop')
    this.flag = data.userTecnico.stateConect
     console.log(this.flag,'lol')
    
    if( this.flag == true){
        
        this.service = res['data']['servi']
        console.log(this.service)
        
     
    }

   
    
  })
  .catch(e => {
    console.error('error', e)
  })   
}
*/


changeStatus(){
  console.log(this.flag,'lolololo')
  if(this.flag ==  true){
    this.flag = false
       
      //this.menssage = 'Desconectarse'
      const tecnico =  JSON.parse(localStorage.getItem('tecnico'))
      const body = {
        stateConect: this.flag
      }
  
     /* this.apitec._PUT_change_status(tecnico.id,body)
      .then(res => res.json())
      .catch(error => console.error(error))
      .then(response => {
        console.log(response)
        
      })  
 */ 
  }else{
      this.flag = true
      //this.menssage = 'Conectarse'
      const tecnico =  JSON.parse(localStorage.getItem('tecnico'))
      const body = {
        stateConect: this.flag
      }
      
      /*this.apitec._PUT_change_status(tecnico.id,body)
      .then(res => res.json())
      .catch(error => console.error(error))
      .then(response => {
        console.log(response)
        this.getService();

        
      })    
    */ }
 
}





getDetalles(data){
  console.log('======DATAALERT',data)
  let ms = 'Nombre Usuario' +': ' + data.id_cliente.name + "<br/>Daño:" + data.id_categoria.nameCategory + "<br/>Direccion:" + data.id_cliente.address ;
  const alerconfirm = this.alertController.create({
    title: 'Detalle Del servicio',
    message: ms,
    buttons: [{
      text: 'Cerrar',
      handler: () =>{
        console.log('Hizo click aqui');
      }
    }
    
    ]
  });
  alerconfirm.present();
}

_cerrar(){
  this.navCtrl.setRoot(LoginPage)
}

}
