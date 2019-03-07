import { Injectable } from "@angular/core";

//config
import { CONFIG_URL } from "../configurl";

// interface
import { Auth, Register } from "../../interfaces/auth";

import { ApirestTecni } from "./apiRest";

@Injectable()

export class AuthTecni{
    apiurl:string = CONFIG_URL.api.prod;
    apiruldev:string = CONFIG_URL.api.dev + ':' + CONFIG_URL.api.port;
    login_path:string = CONFIG_URL.api.path.technical.POST.login;
    register_pathj:string = CONFIG_URL.api.path.technical.POST.register

    constructor(private apires:ApirestTecni){}

    login(tecni:any){
        const url = this.apiurl + this.login_path;

        const headers = {'content-type': 'application/json'}

        return this.apires.__POST(url,tecni,headers)
        
        
    }

    register(tecnico:any){
        const url = this.apiurl + this.register_pathj;
        const headers = {'content-type': 'application/json'};
        return this.apires.__POST(url,tecnico,headers)

    }




}