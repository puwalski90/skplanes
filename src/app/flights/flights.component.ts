import {Component, OnInit} from '@angular/core';
import {FlightsService} from "../core/services/flights.service";
import {Flight} from "../models/flight.model";
import {config, Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {NewFlightModalComponent} from "./new-flight-modal/new-flight-modal.component";
import {DetailsComponent} from "./details/details.component";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent {

  flights$: Observable<Flight[]> =  this.flightsService.getFlights();

  constructor(private flightsService: FlightsService,
              private dialog: MatDialog) {
  }

  openNewFlightModal() {
    this.dialog.open(NewFlightModalComponent);
  }

  showDetails(flight: Flight) {
    this.dialog.open(DetailsComponent,{data: flight})
  }

}
