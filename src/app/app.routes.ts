
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './page/progress/progress.component';
import { Graficas1Component } from './page/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './page/pages.component';
import { RegisterComponent } from './login/register/register.component';

const APP_ROUTES: Routes = [
    {
         path: '',
        component: PagesComponent,
        children:[
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: '', redirectTo:'/dashboard', pathMatch:'full' },

        ] 
        },
    
    { path: 'login', component: LoginComponent },
    { path: 'registrer', component: RegisterComponent },
  
    { path: '**', component: NopagefoundComponent }
];

export const appRouting = RouterModule.forRoot(APP_ROUTES,{ useHash:true });