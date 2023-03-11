import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModalOptions} from "@ng-bootstrap/ng-bootstrap/modal/modal-config";
import {NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";


const NGB_MODAL_GLOBAL_CONFIG: NgbModalOptions = {
  backdrop: 'static',
  fullscreen: false,
  animation: true,
  centered: true
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide:  NgbModalConfig, useValue: NGB_MODAL_GLOBAL_CONFIG}
  ]
})
export class NgBootstrapModule { }
