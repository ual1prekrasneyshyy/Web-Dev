import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompaniesService} from "../../services/companies.service";
import {Company} from "../../models/company";
import {Vacancy} from "../../models/vacancy";
import {VacanciesService} from "../../services/vacancies.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
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
