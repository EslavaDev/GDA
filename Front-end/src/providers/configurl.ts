export const CONFIG_URL = {
    api: {
        prod : 'https://todoak.herokuapp.com/',
        dev: 'http://localhost',
        port: '3000',
        path: {
            technical:{
                POST:{
                    login: 'api/v1/auth/login',
                    register: 'api/v1/auth/register',
                    service: 'api/v1/auth/service/create-service-tecnico'


                },
                GET:{
                    getService : 'api/v1/auth/service/getService/',
                    getPrice: 'api/v1/auth/service/get-price/',
                    myservices: 'api/v1/auth/service/my-service/'
                },
                PUT:{
                    putTomado: 'api/v1/auth/service/update-tomado/',
                    putState: 'api/v1/auth/service/update-state/',
                    putStateTecnico: 'api/v1/auth/service/update-empezar/',
                    putChangeStatus: 'api/v1/auth/change-status/'

                },
                PUSH: {
                    notification: 'api/v1/auth/notifficacion/push/'
                }
            }
        }
    }
}