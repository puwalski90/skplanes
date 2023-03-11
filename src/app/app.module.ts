import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from "@angular/fire/compat";
import {enviroment} from "../enviroments/enviroment";
import {AngularMaterialModule} from "./angular-material/angular-material.module";
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {FlightsModule} from "./flights/flights.module";
import {NgBootstrapModule} from "./ng-bootstrap/ng-bootstrap.module";
import {AdminModule} from "./admin/admin.module";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularMaterialModule,
    CoreModule,
    NgBootstrapModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
