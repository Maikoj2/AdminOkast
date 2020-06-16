import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxsjComponent } from './rxsj/rxsj.component';
import { LoginguardGuard } from '../servise/servise.index';

const PAGES_ROUTES: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate:[LoginguardGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent,data:{ titulos:'dashboar'} },
            { path: 'progress', component: ProgressComponent ,data:{ titulos:' pagina de barras dinamicas' }},
            { path: 'graficas1', component: Graficas1Component, data:{ titulos:'pagina de graficas  ' }},
            { path: 'promesas', component: PromesasComponent,data:{ titulos:'pagina de Pormesas' }},
            { path: 'rxjs', component: RxsjComponent ,data:{ titulos:'pagina de rxjs(observables)'}},
            { path: 'account-settings', component: AccoutSettingsComponent, data:{ titulos:'Ajustes del tema' }},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

        ]
    }
];

export const pagesRoutes = RouterModule.forChild(PAGES_ROUTES);