export class Brewery {
  id: string;
  name: string;
  type: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  phone: number;
  url: string;
  street: string;

  constructor(brewery = {
    id: '',
    name: '',
    brewery_type: '',
    city: '',
    state: '',
    postal_code: '',
    country: '',
    phone: 0,
    website_url: '',
    street: '',
  }) {
    this.id = brewery.id;
    this.name = brewery.name;
    this.type = brewery.brewery_type;
    this.city = brewery.city;
    this.state = brewery.state;
    this.postal_code = brewery.postal_code;
    this.country = brewery.country;
    this.phone = brewery.phone;
    this.url = brewery.website_url;
    this.street = brewery.street;
  }


}

