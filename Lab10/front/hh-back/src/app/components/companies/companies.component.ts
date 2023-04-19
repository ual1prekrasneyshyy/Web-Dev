import {Component, OnInit} from '@angular/core';
import {CompaniesService} from "../../services/companies.service";
import {Company} from "../../models/company";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit{

  companies: Company[];
  loaded: boolean;
  not_founded: boolean;

  constructor(private companiesService: CompaniesService) {
    this.companies = [];
    this.not_founded = false;
    this.loaded = false;
  }

  ngOnInit(): void {
    this.companiesService.get_all_companies_list().subscribe((companies) => {
      this.companies = companies;
      this.loaded = true;
    }, error => {
      this.loaded = true;
      this.not_founded = true;
      alert(error);
    });
  }


}
