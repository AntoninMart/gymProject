import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGymService {
  apiUrl = 'https://localhost:7164/api';

  constructor(private http: HttpClient) { }

  getGroupe(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GroupeMusculaires`);
  }

  GetGroupeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/GroupeMusculaires/${id}`);
  }

  getExercices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Exercices`);
  }

  GetExercicesById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Exercices/${id}`);
  }

  GetExercicesByGroupe(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Exercices/byGroupeMusculaire/${id}`)
  }

  getSeance(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Seances`);
  }

  addSeance(post: any): Observable<any> {
    console.log("allo");
    return this.http.post<any>(`${this.apiUrl}/Seances`, post);
  }

}
