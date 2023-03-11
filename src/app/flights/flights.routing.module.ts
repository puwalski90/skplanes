import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EditFlightComponent} from "./edit-flight/edit-flight.component";
import {FlightsComponent} from "./flights.component";


const ROUTES: Routes = [
  { path: '', component: FlightsComponent },
  { path: ':key', component: EditFlightComponent }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class FlightsRoutingModule { }
