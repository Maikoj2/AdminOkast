import { Component, OnInit, Inject, ElementRef } from '@angular/core';

import { SettingsService } from '../../servise/setting/settings.service';


@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: [
  ]
})
export class AccoutSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService) { }

  ngOnInit(): void {
    this.coloarshck();
  }

  cambiarcolor(tema: string, link: any) {

    this.aplicarsheck(link);
    this._ajustes.aplicar(tema);
  }
  aplicarsheck(link: any) {

    let selector: any = document.getElementsByClassName('selector');
    for (let ref of selector) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
  coloarshck() {

    let selector: any = document.getElementsByClassName('selector');
    let tema= this._ajustes.ajustes.tema;
    for (let ref of selector) {
  
     if (ref.getAttribute('data-theme')== tema) {
      ref.classList.add('working'); break;
     }
    }
    
  }
}
