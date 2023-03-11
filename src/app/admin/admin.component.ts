import {Component} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {BootstrapModalComponent} from "./bootstrap-modal/bootstrap-modal.component";
import {ModalModel} from "../ng-bootstrap/models/modal.model";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(private modalService: NgbModal) {
  }


  open() {
    const modalRef: NgbModalRef = this.modalService.open(BootstrapModalComponent);

    const data: ModalModel = {
      title: 'Hello World!',
      text: 'My onw text !!!!!',
      buttons: {
        save: false,
        cancel: true
      }
    }
    modalRef.componentInstance.content = data;




  }



  open2() {
    const modalRef: NgbModalRef = this.modalService.open(BootstrapModalComponent);

    const data: ModalModel = {
      title: 'Another title',
      text: 'my example modal',
      buttons: {
        save: true,
        cancel: true
      }
    }
    modalRef.componentInstance.content = data;

    modalRef.result.then(this.a, this.b);
  }

  a() {
    console.log('a')
  }

  b() {
    console.log('b')
  }

}
