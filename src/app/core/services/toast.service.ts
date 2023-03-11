import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast: MatSnackBar) { }

  // progress bar witx exit example
  // https://stackblitz.com/edit/angular-snack-bar-with-progress-bar?file=app%2Fapp.component.ts

  success(message: string) {
    this.toast.open(message, '', { panelClass: 'toast-success'});
  }

  failure(message: string) {
    this.toast.open(message, 'undo', { panelClass: 'toast-failure'});
  }
}
