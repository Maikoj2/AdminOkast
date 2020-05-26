import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu:any=[
    {
      titulo:'principal',
      icono:  'mdi mdi-gauge',
      submenu:[
        {titulo: 'dashboard', url:'/dashboard'},
        {titulo: 'pregressBar', url:'/progress'},
        {titulo: 'promesas', url:'/promesas'},
        {titulo: 'rxjs', url:'/rxjs'},
        {titulo: 'Graficas1', url:'/graficas1'}
      ]
    }
];

  constructor() { }
}
