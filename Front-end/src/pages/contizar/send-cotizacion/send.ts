import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { ServiceTecni } from "../../../providers/api/serviceTecni";

import {  PageCotiTermina } from "../coti-termina/coti-termina";
import { PageTerminado } from "../terminado/terminado";

import { HomePage } from "../../home/home";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
    selector: 'page-send',
    templateUrl: 'send.html'
})

export class PageSend{

    price:number = 0

    constructor(public navctrl:NavController,
        public navparams:NavParams,
        private servitec: ServiceTecni,
        private aler:AlertController
        ){}

        updateButton(){
           const service = this.navparams.get('id_servicio')
           this.servitec._getPrice(service)
           .then(res => {
               console.log(res['data'])

               const data = res['data']['price'].price_total;
               this.price = data
              

               
               
               console.log(data,'data')
           })
           .catch(e => {
               console.error('error',e)
           })
           console.log(service)

        }

        _start(){
            console.log(this.navparams.get('id_servicio'))
            const sevici = this.navparams.get('id_servicio')

            const body = {
                status: true
            }
            console.log(body)

            this.servitec._PUT_tecnico_dis(sevici, body)
            .then(res => res.json())
            .catch(error => console.error(error))
            .then(response => {
                if(response.ok == true){
                    this.navctrl.setRoot(PageCotiTermina,{id_servicio:sevici})

                }else{
                    const alert =this.aler.create({
                        title: 'Aviso!',
                        subTitle: 'Error',
                        buttons: ['Cerrar']
                    })

                    alert.present();
                }
                console.log(response,'casi termino la app tecnico')

            })
           

        }

        __closed(){

            const service = this.navparams.get('id_servicio')
            const body = {
                tomado: false
            }
            this.servitec.__PUTtomado(service,body)
            .then(res => res.json())
            .catch(eror => console.error(eror))
            .then(response => {
                if (response.ok == true) {

                    this.navctrl.setRoot(HomePage)


                    
                }else{
                   console.log('eror al enviar al home')
                }
                console.log(response)})


           
            console.log(service)

        }
}