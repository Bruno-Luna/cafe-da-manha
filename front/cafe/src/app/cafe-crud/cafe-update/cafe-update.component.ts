import { AlertService } from './../../service/alert.service';
import { CafeModel } from 'src/app/model/cafe.model';
import { CafeService } from './../../service/cafe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cafe-update',
  templateUrl: './cafe-update.component.html',
  styleUrls: ['./cafe-update.component.css']
})
export class CafeUpdateComponent implements OnInit {

  cafe: CafeModel

  constructor(
    private router: Router,
    private cafeService: CafeService,
    private route: ActivatedRoute,
    private alert: AlertService
  ) { }

  ngOnInit(){
    let idCafe = this.route.snapshot.params['id']
    
    this.findByIdCafe(idCafe)
  }

  findByIdCafe(id: number){
    this.cafeService.findByIdCafe(id).subscribe((resp: CafeModel) => {
      this.cafe = resp
    })
  }

  upCafe(){
    this.cafeService.updateCafe(this.cafe).subscribe((resp: CafeModel)=>{
      this.cafe = resp
     this.alert.alertSuccess('Café atualizado!')
      this.router.navigate(['/cafe'])
    })
  }

  cancel():void {
    this.router.navigate(['/cafe'])
  }

}
