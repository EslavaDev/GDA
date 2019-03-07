import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';
import { PageCotiTermina} from '../coti-termina/coti-termina';


@Component({
    selector: 'page-aceptado',
    templateUrl: 'cotizacion-aceptada.html'
})

export class pageAceptado{
   
    constructor(public nvctrl:NavController){
        

    }

    siguiente(){
        this.nvctrl.setRoot(PageCotiTermina);
    }
}