
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register/register.component';

const APP_ROUTES: Routes = [ 
    { path: 'login', component: LoginComponent },
    { path: 'registrer', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent }
];

export const appRouting = RouterModule.forRoot(APP_ROUTES,{ useHash:true });