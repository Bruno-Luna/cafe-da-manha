import { Component,  Input,  OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() message: string
  @Input() type = 'success' 

  constructor(
    public modal: BsModalRef
  ) { }

  ngOnInit() {
  }

  onClose(){
    this.modal.hide()
  }

}
