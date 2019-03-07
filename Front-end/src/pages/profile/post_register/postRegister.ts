import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'

// import { LoginPage } from '../../auth/login/login';
import { AddDocumentsPage } from './add_documents/addDocuments';

@Component({
  selector: 'page-postRegister',
  templateUrl: 'postRegister.html'
})
export class PostRegisterPage {

  text:string = 'Muchas Gracias por registrarte en nuestra plataforma';
  text2:string = 'El siguiente paso es la categorización de tu perfil según el servicio que estas capacitado para ofrecer y la subida de documentos necesarios para la habilitación de tu perfil.'

  constructor(
    public navCtrl: NavController,

  ) {

  }

  goLogin(){
    this.navCtrl.setRoot(AddDocumentsPage)
  }


}
