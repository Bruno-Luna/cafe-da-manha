import { CafeService } from './../../service/cafe.service';
import { Component, OnInit } from '@angular/core';
import { CafeModel } from 'src/app/model/cafe.model';

@Component({
  selector: 'app-cafe-read',
  templateUrl: './cafe-read.component.html',
  styleUrls: ['./cafe-read.component.css']
})
export class CafeReadComponent implements OnInit {

  cafe: CafeModel[]

  constructor(
    private cafeService: CafeService
  ) { }

  ngOnInit(): void {

    this.cafeService.readCafe().subscribe(cafe =>{
      this.cafe = cafe
    })
  }

}
