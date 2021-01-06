import ICard from "./ICard";

export default class Restaurant {
  public name: string;
  private VALUE_SERVICE_SELF = 14.5;

  constructor(name: string) {
    this.name = name;
  }
  payment(card: ICard): string {
    return card.payment(this.VALUE_SERVICE_SELF);
  }
}
