import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Category} from "../../models/category";
import {get_category_by_id} from "../../storage/storage";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  category: Category | undefined = undefined;

  constructor(private router: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      if(params.get('id') != null) {
        this.category = get_category_by_id(parseInt(<string>params.get('id')));
      }
    });

  }

}
