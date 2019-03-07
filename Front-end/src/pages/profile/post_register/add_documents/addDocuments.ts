import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'


@Component({
  selector: 'page-addDocuments',
  templateUrl: 'addDocuments.html',
})
export class AddDocumentsPage {

  text:string = 'Por favor selecciona las categorías de los servicios en los cuales deseas trabajar y llene el formulario';
  subtitle1:string = 'Seleccione una o varias Categorías';
  subtitle2:string = 'Seleccione una o varias Sub-Categorías';
  subtitle3:string = 'Complete la siguiente información';
  subtitle4:string = 'Suba los archivos solicitados';

  categories = [
    { name: 'Plomero', value: 'plumber'},
    { name: 'Electricista', value: 'technician' },
    { name: 'Vidriero', value: 'glazier' },
    { name: 'Asistencia Vehicular', value:'assistance' }
  ]

  subCategories = [
    { sub: 'sub-cat1' },
    { sub: 'sub-cat1' },
    { sub: 'sub-cat1' },
  ]

  data =[
    { placehoder: 'Teléfono fijo' },
    { placehoder: 'Teléfono móvil' },
    { placehoder: 'Ciudad residencia' },
    { placehoder: 'Dirección residencia' },
  ]

  documents = [
    { type: 'Fotocopia cédula ampliada 150' },
    { type: 'Hoja de vida' },
    { type: 'Pasado judicial' },
    { type: 'Fotocopia de soat vigente' },
    { type: 'Fotocopia de revisión tecnomecánica' },
    { type: 'Fotocopia fondo azul 3x4 (JPG,PNG)' },
  ]


  constructor(
    public navCtrl: NavController,

  ) {

  }

  goLogin(){
    // this.navCtrl.setRoot(LoginPage)
  }


}
