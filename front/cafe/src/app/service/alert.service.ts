import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertComponent } from './../alert/alert.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private showAlert(message: string, type: string){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertComponent)
    bsModalRef.content.type = type
    bsModalRef.content.message = message
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
