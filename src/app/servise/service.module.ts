import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  SettingsService,
  SharedService,
  SidebarService,
  UsuarioService,
  LoginguardGuard } from "./servise.index";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,HttpClientModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UsuarioService ,
  LoginguardGuard]
})
export class ServiceModule { }
