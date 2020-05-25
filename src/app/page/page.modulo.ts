import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ShaderModule } from '../shared/shader.module';
import { pagesRoutes } from './pages.rout';

@NgModule({
declarations:[
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    Graficas1Component
],
exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component

],
imports:[
ShaderModule,
pagesRoutes

]

})

export class PagesModule{}