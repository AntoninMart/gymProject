import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGymService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getGroupe(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/groupes`);
  }

  GetGroupeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/groupes/${id}`);
  }

  getExercices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/exercices`);
  }

  GetExercicesById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/exercices/${id}`);
  }

  GetExercicesByGroupe(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/exercices/groupes/${id}`)
  }

  getSeance(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/seances`);
  }

  addSeance(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/seances`, post);
  }

  deleteSeance(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/seances/${id}`);
  }

  GetExercicesBySeanceId(id: number): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/seances/${id}/exercices`);
  }
}
