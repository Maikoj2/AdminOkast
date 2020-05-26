import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
declare function  init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  constructor(private rout:Router) { }

  ngOnInit(): void {
    init_plugins();
  }


  recovery(){
    let login= document.getElementById('loginform')
    let recover= document.getElementById('recoverform')
    login.style.display = 'none';
    recover.style.display= 'block';
  }
  log(){
    document.getElementById('loginform').style.display = 'block';
     document.getElementById('recoverform').style.display = 'none';
  }
  iniciar(){
     this.rout.navigate(['/dashboard']);
  
  }

// ============================================================== 
// Login and Recover Password 
// ============================================================== 


}
