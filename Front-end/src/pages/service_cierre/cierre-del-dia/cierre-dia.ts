import { Component } from "@angular/core";
import { NavController, AlertController} from 'ionic-angular';
import { ModalPage } from "../modal-cierre/modal";
import { text } from "@angular/core/src/render3/instructions";


@Component({
    selector: "page-ciere",
    templateUrl: "cierre-dia.html"
})

export class pageCierreDia{
    
    constructor(public navcrtl:NavController, public alert:AlertController){

    }

    
    showmodal(){

        const alert = this.alert.create();
        alert.setTitle('DETALLES DEL SERVICIO');

        alert.addInput({
            type: 'text',
            label: 'Descripcion',
            placeholder: 'Descripcion'
        });

        alert.addInput({
            type: 'text',
            placeholder: 'Nombre del cliente',
            label: 'Nombre del cliente'
        });

        alert.addInput({
            type: 'text',
            placeholder: 'Direccion',
            label: 'Direccion'
        });

        alert.addInput({
            type: 'text',
            placeholder: 'Total',
            label: 'Total'
        });



        alert.addButton('Cerrar')


        alert.present();

    }
          

    

}