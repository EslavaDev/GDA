import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';
import { Calendar } from "@ionic-native/calendar";

@Component({
    selector: "page-aplazar",
    templateUrl: "aplazar.html"
})

export class pageAplazar{

    constructor(public nctrl:NavController,
        private calendar:Calendar){
        
    }

    abrircalendario(){
        console.log("entre");

        this.calendar.createCalendar('Mi calendario').then(
            (msg) => { console.log(msg)},
            (err) => {console.log(err);}
        )
    }
}