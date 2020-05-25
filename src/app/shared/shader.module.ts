import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BearcrombsComponent } from './bearcrombs/bearcrombs.component';


@NgModule({
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