import { CafeModel } from './../model/cafe.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  constructor(
    private http: HttpClient
  ) { }

    postCafe(cafe: CafeModel): Observable<CafeModel>{
      return this.http.post<CafeModel>('http://localhost:8080/api/v1/cafe/cadastrar', cafe)
    }

    readCafe(): Observable<CafeModel[]>{
      return this.http.get<CafeModel[]>('http://localhost:8080/api/v1/cafe/listartodos')
    }

    findByIdCafe(id: number): Observable<CafeModel>{
      return this.http.get<CafeModel>(`http://localhost:8080/api/v1/cafe/id/${id}`)
    }

    updateCafe(cafe: CafeModel): Observable<CafeModel>{
      return this.http.put<CafeModel>('http://localhost:8080/api/v1/cafe/atualizar', cafe)
    }

    deleteCafe(id: number): Observable<CafeModel>{
      return this.http.delete<CafeModel>(`http://localhost:8080/api/v1/cafe/id/${id}`)
    }
}
