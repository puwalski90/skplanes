import {Component, ViewChild} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormComponent} from "../form/form.component";
import {FlightsService} from "../../core/services/flights.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ToastService} from "../../core/services/toast.service";


@Component({
  selector: 'app-new-flight-modal',
  templateUrl: './new-flight-modal.component.html',
  styleUrls: ['./new-flight-modal.component.scss']
})
export class NewFlightModalComponent {

  @ViewChild('flightForm') flightForm!: FormComponent



  constructor(private flightsService: FlightsService, private dialogRef: MatDialogRef<NewFlightModalComponent>, private toast: ToastService) {
  }

  addFlight() {
    this.flightsService.addFlight(this.flightForm.form.value)
      .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this));
  }


  private onCreatingSuccess() {
    this.dialogRef.close();
    this.toast.success('Flight has been successfully created!');
  }

  private onCreatingFailure(error: Error) {
    this.toast.failure(error.message);
  }

}
