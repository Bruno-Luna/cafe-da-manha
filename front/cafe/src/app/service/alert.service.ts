import { AlertComponent } from './../alert/alert.component';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertService: BsModalService
  ) { }

  private showAlert(message: string, tipo: string){
    const bsModal: BsModalRef = this.alertService.show(AlertComponent)
    bsModal.content.type = tipo
    bsModal.content.message = message
  }

  alertDanger(message: string){
    this.showAlert(message, 'danger')
  }

  alertSuccess(message: string){
    this.showAlert(message, 'success')
  }

  alertInfo(message: string){
    this.showAlert(message, 'info')
  }
}
