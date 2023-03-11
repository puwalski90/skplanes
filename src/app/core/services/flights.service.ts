import { Injectable } from '@angular/core';
import {AngularFireDatabase, SnapshotAction} from "@angular/fire/compat/database";
import {map, Observable} from "rxjs";
import {Flight} from "../../models/flight.model";

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  private API_URL = '/flights';

  constructor( private db: AngularFireDatabase) { }


  getFlights(): Observable<Flight[]> {
    // @ts-ignore
    return this.db.list<Flight>(this.API_URL).snapshotChanges()
      .pipe(map(response => response.map(flight => this.assignKey(flight))));
  }

  addFlight(flight: Flight) {
    return this.db.list(this.API_URL).push(flight);
  }

  getFlight(key: string):Observable<Flight> {
    // @ts-ignore
    return this.db.object<Flight>(`${this.API_URL}/${key}`).snapshotChanges()
      .pipe(map(flight => this.assignKey(flight)));
  }

  editFlight(key: string, flight: Flight) {
    return this.db.object(`${this.API_URL}/${key}`).update(flight);
  }

  removeFlight(key: string) {
    return this.db.object<Flight>(`${this.API_URL}/${key}`).remove();
  }

  private assignKey(flight: SnapshotAction<Flight>) {
    return {...flight.payload.val(), key: flight.key}
  }




}
