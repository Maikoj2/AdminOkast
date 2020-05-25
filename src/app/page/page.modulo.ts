import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { FormsModule } from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ShaderModule } from '../shared/shader.module';
import { pagesRoutes } from './pages.rout';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { IngraficoDonaComponent } from '../components/ingrafico-dona/ingrafico-dona.component';

// temporal

@NgModule({
declarations:[
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    Graficas1Component,
    IngraficoDonaComponent,
    IncrementadorComponent
],
exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
    

],
imports:[
ShaderModule,
pagesRoutes,
FormsModule,
ChartsModule



]

})

export class PagesModule{}