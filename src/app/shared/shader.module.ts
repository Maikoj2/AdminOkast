import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BearcrombsComponent } from './bearcrombs/bearcrombs.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports:[
        RouterModule,CommonModule
    ],
declarations:[
    HeaderComponent,
    SidebarComponent,
    BearcrombsComponent
],
exports: [
  
    HeaderComponent,
    SidebarComponent,
    BearcrombsComponent

]

})

export class  ShaderModule{}