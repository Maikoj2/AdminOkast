import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate {
  constructor(public usuarioservece: UsuarioService,
    public router: Router){}
  canActivate( ){ 
    if (this.usuarioservece.estalogeado()) {

      console.log('paso');    
      return true;  
    } else {
      console.log('bloqueado');   
      this.router.navigate(['/login'])  
      return false;
    }
    
 
  }
  
}
