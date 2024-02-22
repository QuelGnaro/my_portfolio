export interface IUser {
  id: number;
  name: string;
  surname: string;
  password: string;
  birthDate: Date;
}

export class User implements IUser {
  id: number = new Date().getTime();
  name: string = '';
  surname: string = '';
  password: string = '';
  birthDate: Date;

  constructor(obj: IUser) {
    this.id = obj.id;
    this.name = obj.name;
    this.surname = obj.surname;
    this.password = obj.password;
    this.birthDate = obj.birthDate;
  }

}