import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import { NewFlightModalComponent } from './new-flight-modal/new-flight-modal.component';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DetailsComponent } from './details/details.component';
import { EditFlightComponent } from './edit-flight/edit-flight.component';
import {FlightsRoutingModule} from "./flights.routing.module";



@NgModule({
  declarations: [
    FlightsComponent,
    FlightCardComponent,
    NewFlightModalComponent,
    FormComponent,
    DetailsComponent,
    EditFlightComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlightsRoutingModule
  ]
})
export class FlightsModule { }
