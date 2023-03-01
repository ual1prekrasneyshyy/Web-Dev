import {Item} from "./item";

export interface Category{
  name: string;
  image_link: string;
  items: Item[];
}
