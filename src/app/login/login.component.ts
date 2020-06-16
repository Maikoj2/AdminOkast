import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../servise/usuario/usuario.service';
import { Usuario } from '../modelos/usuario.model';


declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  recuerdame = false;
  email: string;
  auth2: any;

  constructor(private rout: Router,
    public usuarioservise: UsuarioService) { }

  ngOnInit(): void {
   
    init_plugins();
    this.googleinit();
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 0) {
      this.recuerdame = true;

    }

  }
  googleinit() {

    gapi.load("auth2", () => {

      this.auth2 = gapi.auth2.init({
        client_id: '1075432582065-3htu42hpvvl51ih20u3skfcvs8sdd46u.apps.googleusercontent.com',
        cookiepolicy: 'single_host-origin',
        scope: 'profile email'
      });
      this.attachsingin(document.getElementById('btngoogle'))
    });
  }

  attachsingin(element) {

    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      //let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;
      console.log(token);
      this.usuarioservise.logingoogle(token).subscribe(() => window.location.href= '#/dashboard'
      );



    })
  }

  recovery() {
    let login = document.getElementById('loginform')
    let recover = document.getElementById('recoverform')
    login.style.display = 'none';
    recover.style.display = 'block';
  }
  log() {
    document.getElementById('loginform').style.display = 'block';
    document.getElementById('recoverform').style.display = 'none';
  }
  iniciar(forma: NgForm) {
    if (forma.invalid) {
      return
    }
    let usuario = new Usuario(null, forma.value.email, forma.value.password);
    console.log(forma.value.recuerdame);

    this.usuarioservise.login(usuario, forma.value.recuerdame)
      .subscribe(resp => this.rout.navigate(['/dashboard']));

  }

  // ============================================================== 
  // Login and Recover Password 
  // ============================================================== 


}
