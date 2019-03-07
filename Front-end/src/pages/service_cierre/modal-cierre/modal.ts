import { Component } from "@angular/core";
import { NavController, NavParams , ViewController} from "ionic-angular";

@Component({
    selector: 'page-model',
    templateUrl: 'modal.html'
})

export class ModalPage{

    constructor( public navctrl: NavController,
        public navparams:NavParams,
        private viewCtrl: ViewController){

    }

    closemodal(){
        this.viewCtrl.dismiss();

    }



}