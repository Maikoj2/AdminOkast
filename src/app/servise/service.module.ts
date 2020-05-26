import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService,SharedService,SidebarService } from "./servise.index";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService ]
})
export class ServiceModule { }
