import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutaas
import { appRouting } from './app.routes';

// modulos
import { ServiceModule } from './servise/service.module';
import { PagesModule } from './page/page.modulo';

//temporal
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register/register.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent,
    
    
  ],
  imports: [
    BrowserModule,
    appRouting,
    PagesModule,
    FormsModule,
    ServiceModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
