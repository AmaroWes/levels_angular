import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models/player';


const BASE_API = "http://localhost:3000/player";
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http:HttpClient) {}

    createPlayer(player: Player): Observable<Player> {
        return this.http.post<Player>(BASE_API, player, httpOptions)
    }

    searchPlayer(): Observable<Player[]> {
        return this.http.get<Player[]>(BASE_API);
    }

    searchPlayerById(id: number): Observable<Player> {
        return this.http.get<Player>(BASE_API+`/${id}`)
    }

    updatePlayer(id: number, player: Player): Observable<Player> {
        return this.http.put<Player>(BASE_API+`/${id}`, player, httpOptions)
    }

    deletePlayer(id: number): Observable<Player> {
        return this.http.delete<Player>(BASE_API+`/${id}`)
    }
}