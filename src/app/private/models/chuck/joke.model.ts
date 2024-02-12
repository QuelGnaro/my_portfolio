import { ICategory } from "./category.model";

export interface Joke {
  id: string;
  value: string;
  category: ICategory;
}