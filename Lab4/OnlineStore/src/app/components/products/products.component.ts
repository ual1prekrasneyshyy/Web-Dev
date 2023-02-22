import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product [] = [];


  constructor() {
  }

  ngOnInit(): void {
    this.products = [
      {name: 'Шахматы "Орловская Ладья P-1"',
        description: 'Дерево хвойных, лиственных пород. Фанера, рисунок (шелкография), покрытие лак. Шахматные обиходные деревянные фигуры, покрытие лак — 32 шт. (16 светлых, 16 темных). Размеры шахматных фигур: Король: 70 мм * d 25 мм; Ферзь: 60 мм * d 25 мм; Слон: 50 мм* d 25 мм; Конь: 47 мм * d 25 мм; Ладья: 40 мм * d 25 мм; Пешка: 40 мм * d 25 мм. Размер доски: 290*145*40 мм в термоупаковке.',
        rating: 5.0,
        link: 'https://kaspi.kz/shop/p/orlovskaja-lad-ja-p-1-100634146/?c=750000000#!/item',
        images: []},
      {name: '', description: '', rating: 4.0, link: '', images: []},
      {name: '', description: '', rating: 4.0, link: '', images: []},
      {name: '', description: '', rating: 4.0, link: '', images: []},
      {name: '', description: '', rating: 4.0, link: '', images: []},
      {name: '', description: '', rating: 4.0, link: '', images: []},
      {name: '', description: '', rating: 4.0, link: '', images: []},
      {name: '', description: '', rating: 4.0, link: '', images: []},
      {name: '', description: '', rating: 4.0, link: '', images: []},
      {name: '', description: '', rating: 4.0, link: '', images: []},
      {name: '', description: '', rating: 4.0, link: '', images: []}
    ]
  }

}
