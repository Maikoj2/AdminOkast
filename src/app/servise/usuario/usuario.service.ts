import { Injectable } from '@angular/core';
import { Usuario } from '../../modelos/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVISE } from '../../config/config';

import { map } from 'rxjs/operators';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { Router } from '@angular/router';

const swal: SweetAlert = _swal as any;


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  usuario: Usuario;
  tooken: string;

  constructor( public http: HttpClient,
    public rouer: Router) {
  this.cargarstorage();
  }

  estalogeado() {
    return (this.tooken.length > 5) ? true : false;

  }
  cargarstorage() {
    if (localStorage.getItem('token')) {
      this.tooken = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }else{
      this.tooken = '';
      this.usuario = null;
    }

  }


  guardarstorage(id: string, token: string, usuario: Usuario) {

    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuario = usuario;
    this.tooken = token;
  }


  logout(){

    this.usuario = null;
    this.tooken = '';
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.rouer.navigate(['/login']);


  }
  logingoogle(token: string) {
    let url = URL_SERVISE + '/login/google';
    return this.http.post(url, { token })
      .pipe(map((rest: any) => {
        console.log('entro');

        this.guardarstorage(rest.id, rest.token, rest.usuario);
        return true;
      }));

  }
  login(usuario: Usuario, recordar: boolean = false) {
    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      console.log('entro');
      localStorage.removeItem('email');
    }
    let url = URL_SERVISE + '/login';
    return this.http.post(url, usuario).pipe(map((rest: any) => {

      this.guardarstorage(rest.id, rest.token, rest.usuario);
      return true;
    }));
  }

  crearUsuarios(usuario: Usuario) {
    let url = URL_SERVISE + '/Usuario';
    return this.http.post(url, usuario).pipe(
      map((resp: any) => {
        swal('usuario creado ', usuario.email, 'success');
        return resp.usuario;
      }));
  }
}
