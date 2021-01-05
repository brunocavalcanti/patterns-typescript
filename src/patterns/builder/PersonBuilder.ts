/* eslint-disable @typescript-eslint/no-use-before-define */

export default class PersonBuilder {
  private name!: string;
  private email!: string;
  private birthDate!: Date;
  private phone!: string;
  private address!: string;
  private code!: number;
  private city!: string;
  get Name(): string {
    return this.name;
  }
  get Email(): string {
    return this.email;
  }
  get BirthDate(): Date {
    return this.birthDate;
  }
  get Phone(): string {
    return this.phone;
  }
  get Address(): string {
    return this.address;
  }
  get Code(): number {
    return this.code;
  }
  get City(): string {
    return this.city;
  }

  setName(name: string): PersonBuilder {
    this.name = name;
    return this;
  }
  setEmail(email: string): PersonBuilder {
    this.email = email;

    return this;
  }
  setBirthDate(birthdate: Date): PersonBuilder {
    this.birthDate = birthdate;
    return this;
  }
  setPhone(phone: string): PersonBuilder {
    this.phone = phone;
    return this;
  }
  setAddress(address: string): PersonBuilder {
    this.address = address;
    return this;
  }
  setCode(code: number): PersonBuilder {
    this.code = code;
    return this;
  }
  setCity(city: string): PersonBuilder {
    this.city = city;
    return this;
  }

  build(): Person {
    return new Person(this);
  }
}

class Person {
  private name: string;
  private email: string;
  private birthDate: Date;
  private phone: string;
  private address: string;
  private code: number;
  private city: string;

  constructor(person: PersonBuilder) {
    this.address = person.Address;
    this.code = person.Code;
    this.city = person.City;
    this.phone = person.Phone;
    this.email = person.Email;
    this.birthDate = person.BirthDate;
    this.name = person.Name;
  }
  get Name(): string {
    return this.name;
  }
  get Email(): string {
    return this.email;
  }
  get BirthDate(): Date {
    return this.birthDate;
  }
  get Phone(): string {
    return this.phone;
  }
  get Address(): string {
    return this.address;
  }
  get Code(): number {
    return this.code;
  }
  get City(): string {
    return this.city;
  }
}
