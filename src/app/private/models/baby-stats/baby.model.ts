export class Weight {
  id: string;
  date: Date;
  weight: number;
  note: string;
}
export class Meal {
  id: string;
  date: Date;
  weight: number;
  note: string;
}
export class Pee {
  id: string;
  date: Date;
  note: string;
}
export class Poop {
  id: string;
  date: Date;
  note: string;
}

export interface IBaby {
  id: string,
  name: string,
  sex: string,
  born: Date,
  weigths: Weight[],
  meals: Meal[],
  pees: Pee[],
  poops: Poop[];
}