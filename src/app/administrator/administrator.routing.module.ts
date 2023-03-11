import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashComponent} from "./dash/dash.component";
import {Dash2Component} from "./dash2/dash2.component";



const ROUTES: Routes = [
  { path: '', component: DashComponent },
  { path: 'dash2', component: Dash2Component },
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
