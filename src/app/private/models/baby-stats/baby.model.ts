export class Weight {
  date: Date;
  weight: number;
  note: string;
}
export class Meal {
  date: Date;
  note: string;
}
export class Pee {
  date: Date;
  note: string;
}
export class Poop {
  date: Date;
  note: string;
}

export interface IBaby {
  name: string,
  sex: string,
  born: Date,
  weigths: Weight[],
  meals: Meal[],
  pees: Pee[],
  poops: Poop[];
}