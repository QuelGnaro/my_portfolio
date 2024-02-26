export class Weight {
  id: string = '';
  date: Date = new Date();
  weight: number = 0;
  note: string = '';

  constructor(weight: Weight) {
    this.id = weight.id;
    this.date = weight.date;
    this.weight = weight.weight;
    this.note = weight.note;
  }
}
export class Meal {
  id: string = '';
  date: Date = new Date();
  weight: number = 0;
  note: string = '';
}
export class Pee {
  id: string = '';
  date: Date = new Date();
  note: string = '';
}
export class Poop {
  id: string = '';
  date: Date = new Date();
  note: string = '';
}

export interface IBaby {
  id: string,
  name: string,
  sex: string,
  born: Date,
  weights: Weight[],
  meals: Meal[],
  pees: Pee[],
  poops: Poop[];
}

export class Baby implements IBaby {
  id: string = '';
  name: string = '';
  sex: string = '';
  born: Date = new Date();
  weights: Weight[] = [];
  meals: Meal[] = [];
  pees: Pee[] = [];
  poops: Poop[] = [];

  constructor(baby: Baby) {
    this.id = baby.id;
    this.name = baby.name;
    this.sex = baby.sex;
    this.born = baby.born;
  }


}

