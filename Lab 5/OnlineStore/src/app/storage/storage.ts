import {Item} from "../models/item";
import {Category} from "../models/category";

export const data: Category[] = [
  {id: 1, name: 'Электроника', image_link: '', items: []},
  {id: 2, name: 'Продукты питания', image_link: '', items: []},
  {id: 3, name: 'Досуг, хобби', image_link: '', items: []},
  {id: 4, name: 'Детские товары', image_link: '', items: []}
];

export function get_category_by_id(id: number): Category | undefined {
  for(let c of data){
    if(c.id == id)
      return c
  }

  return undefined
}

export function get_item_by_id(id: number): Item | undefined {
  for(let c of data){
    for(let i of c.items){
      if(i.id == id)
        return i
    }
  }

  return undefined
}
