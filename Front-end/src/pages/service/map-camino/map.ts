import { CotizarPage } from './../../contizar/cotizando/cotizacion';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertsProvider } from '../../../providers/alert';
//import { leaflet } from 'leaflet';
//import leaflet from 'leaflet';


/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  //@ViewChild('map') mapcontainer: ElementRef;
   map: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private alertctrl:AlertsProvider) {
    console.log(this.navParams.get('servi'))
  }

  // ionViewDidEnter() {
  //   this.loadmap();
  // }
  // loadmap(){
  //   console.log('entre')
  //   this.map = leaflet.map("map").fitWorld();
  //   leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attributions: 'www.tphangout.com',
  //     maxZoom: 18
  //   }).addTo(this.map);
  //   this.map.locate({
  //     setView: true,
  //     maxZoom: 10
  //   }).on('locationfound', (e) => {
  //     console.log('found you');
  //     let markerGroup = leaflet.featureGroup();
  //     let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
  //       alert('Marker clicked');
  //     })
  //     markerGroup.addLayer(marker);
  //     this.map.addLayer(markerGroup);
  //     }).on('locationerror', (err) => {
  //       alert(err.message);
  //     })
  // }

  _goCotizar(){

    const data = this.navParams.get('servi')
    this.navCtrl.setRoot(CotizarPage, {servi: data}) ;

    

  }

  __details(){
    const detail =  this.navParams.get('servi');
    this.alertctrl.showAlert(`${detail.changeStatus}`,`Nombre Categoria: ${detail.id_categoria.nameCategory} <br/> Nombre: ${detail.id_cliente.name} <br/> Apellido: ${detail.id_cliente.last_name} <br/> Telefono: ${detail.id_cliente.phone} <br/> Direccion: ${detail.id_cliente.address}`)
    console.log(detail,'detalles')
  }





}
