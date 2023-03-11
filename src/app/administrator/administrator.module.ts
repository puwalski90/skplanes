import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorComponent } from './administrator.component';
import { DashComponent } from './dash/dash.component';
import {AdministratorRoutingModule} from "./administrator.routing.module";
import { Dash2Component } from './dash2/dash2.component';
import { Dash3Component } from './dash3/dash3.component';



@NgModule({
  declarations: [
    AdministratorComponent,
    DashComponent,
    Dash2Component,
    Dash3Component
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule
  ]
})
export class AdministratorModule { }
