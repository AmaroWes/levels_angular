import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quest } from './quest';

const BASE_API_QUEST = "http://localhost:3000/quests";
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
}

@Injectable({providedIn: 'root'})
export class QuestApiService {
    constructor(private http:HttpClient) { }

    create(quest: Quest): Observable<Quest> {
      return this.http.post<Quest>(BASE_API_QUEST, quest, httpOptions);
    }
  
    search(): Observable<Quest[]> {
      return this.http.get<Quest[]>(BASE_API_QUEST);
    }
  
    searchById(id: number): Observable<Quest> {
      return this.http.get<Quest>(`http://localhost:3000/quests/${id}`);
    }
  
    update(id: number, quest: Quest): Observable<Quest> {
      return this.http.put<Quest>(`http://localhost:3000/quests/${id}`, quest, httpOptions);
    }

    delete(id: number): Observable<Quest> {
      return this.http.delete<Quest>(`http://localhost:3000/quests/${id}`);
    }
  }