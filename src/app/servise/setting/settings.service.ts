import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajustes: ajustes = {
    temaurl: 'assets/css/colors/default.css',
    tema: 'default'
};

constructor(@Inject(DOCUMENT) private _document ) {
  this.cargarajustes();
 }

guardarajustes(){

  localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  
  
}
cargarajustes(){

if (localStorage.getItem('ajustes')) {
  this.ajustes= JSON.parse(localStorage.getItem('ajustes'));

  this.aplicar( this.ajustes.tema)
  
  
} else {
 
  
}

}
aplicar(tema:string){
  let url=`assets/css/colors/${tema}.css`;
  this._document.getElementById('tema').setAttribute('href' , url) ;

  this.ajustes.tema= tema;

   this.ajustes.temaurl= url;
  this.guardarajustes();
}
}

interface ajustes {
  temaurl: string;
  tema: string;


}
