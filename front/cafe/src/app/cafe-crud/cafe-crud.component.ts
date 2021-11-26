import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CafeModel } from '../model/cafe.model';

@Component({
  selector: 'app-cafe-crud',
  templateUrl: './cafe-crud.component.html',
  styleUrls: ['./cafe-crud.component.css']
})
export class CafeCrudComponent implements OnInit {

  listarCafe: CafeModel[]
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }



}
