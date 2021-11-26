import { AlertService } from './../../service/alert.service';
import { CafeService } from './../../service/cafe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CafeModel } from 'src/app/model/cafe.model';


@Component({
  selector: 'app-cafe-create',
  templateUrl: './cafe-create.component.html',
  styleUrls: ['./cafe-create.component.css']
})
export class CafeCreateComponent implements OnInit {

  cafe: CafeModel = new CafeModel()

  constructor(
    private router: Router,
    private cafeService: CafeService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
  
  }

  createCafe(){
   
    this.cafeService.postCafe(this.cafe).subscribe((resp: CafeModel)=>{
      this.cafe = resp
      this.alert.alertSuccess('Café registrado!')
      this.router.navigate(['/cafe'])

    }, erro =>{
      if(erro.status == 401){
        this.alert.alertDanger('CPF ou Café já cadastrado. Por favor, cadastrar outro.')
      }
      if(erro.status == 400){
        this.alert.alertInfo('Por favor, preencha os campos!')
      }
    })
  }

}

