import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceTecni } from "../../../providers/api/serviceTecni";
import { CotizarPage } from "../../contizar/cotizando/cotizacion";
import { PageSend } from "../../contizar/send-cotizacion/send";
import { AlertsProvider } from "../../../providers/alert";

@Component({
  selector: 'page-my-service',
  templateUrl: 'my-service.html'

})
export class MyServicePage {
    myservice:any = []
    message:string = ''
    loading:any = 'cargando'

    constructor(
        public navctr: NavController,
        private apires: ServiceTecni,
        private alert:AlertsProvider

    ){

    }

    ionViewDidLoad(){
        this.getMyservice();
        console.log('3333')
      }


    getMyservice(){

        const id_tecnico = JSON.parse(localStorage.getItem('tecnico'))
        console.log(id_tecnico.id,'soy el id')
        this.apires._myservice(id_tecnico.id)
        .then(res => {
          const data = res
          console.log(typeof(data))
          if(typeof(data) == "object"){
            console.log(data)
            return this.myservice = data['data']['succes']
              
            

          }else{
            return console.log(this.loading);

          }
 
          })
          .catch(e => {
            console.log('error', e)
          })
        
    }

    detalles(data){
        console.log('======DATAALERT',data)
        let ms = 'Cliente' +': ' + data.id_cliente.name + ' ' + data.id_cliente.last_name +'<br/>Telefono  Cliente' +': ' + data.id_cliente.phone + "<br/>Daño:" + data.id_categoria.nameCategory + "<br/>Direccion:" + data.id_cliente.address ;
        this.alert.showAlert('Detalles',ms);
  
    }

    _openServi(data){
      console.log(data)
      return this.navctr.setRoot(PageSend,{id_servicio: data._id})
      

    }

 

}
