import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vacancy} from "../models/vacancy";

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  private BASE_URL: string;
  constructor(private http: HttpClient) {
    this.BASE_URL = 'http://localhost:8000/api/vacancies/';
  }

  public get_top_ten_vacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}top_ten/`);
  }
}
