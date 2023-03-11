import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Flight} from "../../models/flight.model";
import {FormComponent} from "../form/form.component";
import {FlightsService} from "../../core/services/flights.service";
import {ActivatedRoute, Router} from "@angular/router";
import {tap} from "rxjs";
import {ToastService} from "../../core/services/toast.service";



@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.scss']
})
export class EditFlightComponent implements AfterViewInit{

  flight!: Flight;
  @ViewChild("flightForm") flightForm!: FormComponent;

  constructor(private flightService:FlightsService, private route: ActivatedRoute, private toast: ToastService, private router: Router) {
  }

  ngAfterViewInit(): void {
    this.loadFlight();
  }


  private loadFlight() {
    const key = this.route.snapshot.params['key'];
    this.flightService.getFlight(key)
      .pipe(tap(flight => this.flightForm.setFlight(flight)))
      .subscribe(flight => this.flight = flight);
  }

  removeFlight() {
    this.flightService.removeFlight(this.flight.key)
      .then(this.onRemoveSuccess.bind(this), this.onRemoveFailure.bind(this));
  }


  editFlight() {
    this.flightService.editFlight(this.flight.key, this.flightForm.form.value)
      .then(this.onEditSuccess.bind(this), this.onEditFailure.bind(this));
  }

  private onEditSuccess() {
    this.router.navigate(['/dashboard']);
    this.toast.success("Flight was successfuly edited!");
  }

  private onEditFailure(error: Error) {
    this.toast.failure(error.message);
  }

  private onRemoveSuccess() {
    this.router.navigate(['/dashboard']);
    this.toast.success("Flight was successfuly removed!");
  }

  private onRemoveFailure(error: Error) {
    this.toast.failure(error.message);
  }

}
