import { Component } from "@angular/core";
import { NavController , NavParams} from 'ionic-angular';
import { PageTerminado } from "../terminado/terminado";
import { pageAplazar } from "../../agenda/aplazar/aplazar";
import {PageResult  } from "../../contizar/result/result";

@Component({
    selector: 'page-cotiTermina',
    templateUrl: 'coti-termina.html'
})

export class PageCotiTermina{

    constructor(public nanctr: NavController,
        public navparams:NavParams
        ){

    }

    terminar(){
        const id_servicio = this.navparams.get('id_servicio')
        this.nanctr.setRoot(PageResult,{id_servicio: id_servicio});
    }


    aplazar(){
        this.nanctr.setRoot(pageAplazar);
    }

    
}