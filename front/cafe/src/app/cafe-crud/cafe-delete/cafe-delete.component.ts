import { AlertService } from './../../service/alert.service';
import { CafeService } from './../../service/cafe.service';
import { CafeModel } from 'src/app/model/cafe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cafe-delete',
  templateUrl: './cafe-delete.component.html',
  styleUrls: ['./cafe-delete.component.css']
})
export class CafeDeleteComponent implements OnInit {

  cafe: CafeModel

  constructor(
    private router: Router,
    private cafeService: CafeService,
    private route: ActivatedRoute,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    
    
    let idCafe = this.route.snapshot.params['id']
    
    this.findByIdCafe(idCafe)
    
  }

  findByIdCafe(id: number){
    this.cafeService.findByIdCafe(id).subscribe((resp: CafeModel) => {
      this.cafe = resp
    })
  }

  removeCafe(){
   this.cafeService.deleteCafe(this.cafe.id).subscribe(() => {
     this.alert.alertDanger('Café apagado!')
    this.router.navigate(['/cafe'])
   })

  }

  cancel(){
    this.router.navigate(['/cafe'])
  }
  
}
