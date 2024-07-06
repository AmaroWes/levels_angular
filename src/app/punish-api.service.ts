import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Punish } from './punish';

const BASE_API_PUNISH = "http://localhost:3000/punish";
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
}

@Injectable({providedIn: 'root'})
export class PunishApiService {
    constructor(private http:HttpClient) { }

    create(punish: Punish): Observable<Punish> {
      return this.http.post<Punish>(BASE_API_PUNISH, punish, httpOptions)
    }
  
    search(): Observable<Punish[]> {
      return this.http.get<Punish[]>(BASE_API_PUNISH);
    }
  
    searchById(id: number): Observable<Punish> {
      return this.http.get<Punish>(`http://localhost:3000/punish/${id}`);
    }
  
    update(id: number, punish: Punish): Observable<Punish> {
      return this.http.put<Punish>(`http://localhost:3000/punish/${id}`, punish, httpOptions);
    }

    delete(id: number): Observable<Punish> {
      return this.http.delete<Punish>(`http://localhost:3000/punish/${id}`);
    }
  }