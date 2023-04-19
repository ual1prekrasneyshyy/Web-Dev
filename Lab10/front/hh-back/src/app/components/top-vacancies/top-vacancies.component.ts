import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Vacancy} from "../../models/vacancy";
import {VacanciesService} from "../../services/vacancies.service";

@Component({
  selector: 'app-top-vacancies',
  templateUrl: './top-vacancies.component.html',
  styleUrls: ['./top-vacancies.component.css']
})
export class TopVacanciesComponent implements OnInit{

  vacancies: Vacancy[];
  loaded: boolean;
  not_founded: boolean;

  constructor(private router: ActivatedRoute, private vacanciesService: VacanciesService) {
    this.vacancies = [];
    this.not_founded = false;
    this.loaded = false;
  }
  ngOnInit(): void {
    this.vacanciesService.get_top_ten_vacancies().subscribe((vacancies) => {
      this.vacancies = vacancies;
      this.loaded = true;
    }, error => {
      this.loaded = true;
      this.not_founded = true;
    });
  }



}
