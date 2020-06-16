import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal  from "sweetalert";

// import swal, { SweetAlert } from "./core";

import { UsuarioService } from '../../servise/servise.index';
import { Usuario } from '../../modelos/usuario.model';
import { Router } from '@angular/router';
declare function init_plugins();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;
  constructor( 
    public usuarioservice: UsuarioService,
    public router:Router) { }

  soniguales(camp1: string, campo2: string) {

    return (group: FormGroup) => {

      let pass = group.controls[camp1].value;
      let pass2 = group.controls[campo2].value;

      if (pass === pass2) {
        return null;

      }
      return {
        soniguales: true
      };
    };

  }

  ngOnInit(): void {
    init_plugins();
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    }, { validators: this.soniguales('password', 'password2') });

    this.forma.setValue({
      nombre: 'maikk',
      correo: 'maicol_jimenez82121@hotmail.com',
      password: '123456',
      password2: '123456',
      condiciones: true

    });
  };


  registrarUsuarios() {

    if (this.forma.invalid) {
      return;
    }

    if (!this.forma.value.condiciones) {
      swal('importante', 'Debe de aceptar los teminos y condiciones', 'warning')
      return;

    }

    let usuario = new Usuario(this.forma.value.nombre, this.forma.value.correo, this.forma.value.password);

    this.usuarioservice.crearUsuarios(usuario).
      subscribe(resp =>  this.router.navigate(['/login']));

  }

}
