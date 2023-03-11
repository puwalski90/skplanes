import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalModel} from "../../ng-bootstrap/models/modal.model";

@Component({
  selector: 'app-bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.scss']
})
export class BootstrapModalComponent {

  constructor(public activeModal: NgbActiveModal) {}

  content!: ModalModel;











}
