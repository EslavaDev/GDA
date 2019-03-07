import { Injectable } from "@angular/core";

import axios from "axios";

@Injectable()

export class ApirestTecni{

    constructor(){}

    async GET(url, body, headers ){

        try {
            if(body != null && body == null){
                return axios.get(url,body)
                .then(response => console.log('Response GET url body', response))
                .catch(error => console.error('Error GET url body', error));
            

            }else if(body === null && headers !== null){
                 return await axios.get(url,headers)
                // .then(response => console.log('Response GET url headers',response))
                // .catch(error => console.error('Error GET url headers', error));

            }else{
                return axios.get(url)
                .then(response => console.log('Response GET url', response))
                .catch(error => console.error('Error GET url', error));
            }

        } catch (error) {

            throw error
            
        }

        
    }


    __POST(url,body,headers){

        return fetch(url,{
            method: 'POST',
            body: JSON.stringify(body),
            headers: headers
        })
    }

    __PUT(url,body,headers){

        return fetch(url,{
            method: 'PUT',
            body: JSON.stringify(body),
            headers: headers
        })
    }

    PUT(url, body, headers){

        const options = {
            method: 'PUT',
            headers,
            body,
            url

        }
        console.log('PUT PROVIDER', options)
        try {
            return  axios(options)
            .then(response => console.log('Response PUT',response))
            .catch(error => console.error('Error PUT',error));
        } catch (error) {
            throw error
            
        }

    }
}