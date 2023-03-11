import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AdminComponent,
    BootstrapModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

})
export class AdminModule { }
