import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './player';

const BASE_API_PLAYER = "http://localhost:3000/players";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PlayerApiService {

  constructor(private http:HttpClient) { }

  search(): Observable<Player[]> {
    return this.http.get<Player[]>(BASE_API_PLAYER);
  }

  searchById(id: number): Observable<Player> {
    return this.http.get<Player>(`http://localhost:3000/players/${id}`);
  }

  create(player: Player): Observable<Player> {
    return this.http.post<Player>(BASE_API_PLAYER, player, httpOptions)
  }
}
