import { Injectable } from "@angular/core";

//config
import { CONFIG_URL } from "../configurl";

// interface
import { Auth, Register } from "../../interfaces/auth";

import { ApirestTecni } from "./apiRest";

@Injectable()

export class ServiceTecni{
    apiurl:string = CONFIG_URL.api.prod;
    apiruldev:string = CONFIG_URL.api.dev + ':' + CONFIG_URL.api.port;
    getService_path:string =CONFIG_URL.api.path.technical.GET.getService;
    getServicePrice_path:string = CONFIG_URL.api.path.technical.GET.getPrice;
    put_tomado_path:string = CONFIG_URL.api.path.technical.PUT.putTomado;
    put_state_path:string = CONFIG_URL.api.path.technical.PUT.putState;
    getMyservice_path:string =CONFIG_URL.api.path.technical.GET.myservices;
    put_state_tecnico_path:string =CONFIG_URL.api.path.technical.PUT.putStateTecnico;
    pos_push:string = CONFIG_URL.api.path.technical.PUSH.notification;
    put_change_status:string = CONFIG_URL.api.path.technical.PUT.putChangeStatus;
    
    constructor(private apires:ApirestTecni){}

    async _getService(id_tecnico){
        const url = this.apiurl + this.getService_path + id_tecnico;
        const headers ={'content-type': 'application/json'}
        return await this.apires.GET(url,null,headers)
    }

    async _getPrice(id_servicio){
        const url = this.apiurl + this.getServicePrice_path + id_servicio;
        const headers ={'content-type': 'application/json'}
        return await this.apires.GET(url,null,headers);

    }
    async _myservice(id_tecnico){
        const url = this.apiurl + this.getMyservice_path + id_tecnico;
        const headers ={'content-type': 'application/json'}
        return await this.apires.GET(url, null , headers)

    }
    __PUTtomado(id_servicio, body ){
        const url = this.apiurl + this.put_tomado_path + id_servicio;
        const headers ={'content-type': 'application/json'}
        return this.apires.__PUT(url,body,headers)


    }

    __PUT_state(id_servicio , body ){
        const url = this.apiurl + this.put_state_path + id_servicio;
        const headers ={'content-type': 'application/json'}
        return this.apires.__PUT(url,body,headers)

    }

    _PUT_tecnico_dis(id_servicio,body){
        const url = this.apiurl + this.put_state_tecnico_path + id_servicio;
        const headers ={'content-type': 'application/json'}

        return this.apires.__PUT(url,body,headers)
    }

    _PUT_change_status(id_tecnico,body){
        const url = this.apiurl + this.put_change_status + id_tecnico;
        const headers ={'content-type': 'application/json'}
        console.log(url,'url', body , 'body')
        return this.apires.__PUT(url,body,headers)


    }

    _POST_PUSH(body){
        const url = this.apiurl + this.pos_push + 3;
        const headers ={'content-type': 'application/json'}
        return this.apires.__POST(url,body,headers)

    }



   

}