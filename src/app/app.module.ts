import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutaas
import { appRouting } from './app.routes';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProgressComponent } from './page/progress/progress.component';
import { Graficas1Component } from './page/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BearcrombsComponent } from './shared/bearcrombs/bearcrombs.component';
import { PagesComponent } from './page/pages.component';
import { RegisterComponent } from './login/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BearcrombsComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
