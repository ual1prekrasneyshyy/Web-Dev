import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompaniesService} from "../../services/companies.service";
import {Company} from "../../models/company";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{

  company: Company;
  loaded: boolean;
  not_founded: boolean;

  constructor(private router: ActivatedRoute, private companiesService: CompaniesService) {
    this.company = {} as Company;
    this.not_founded = false;
    this.loaded = false;
  }
  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.companiesService.get_company_by_id(parseInt(<string>params.get('id'))).subscribe((company) => {
        this.company = company;
        this.loaded = true;
      }, error => {
        this.loaded = true;
        this.not_founded = true;
      });
    });
  }



}
