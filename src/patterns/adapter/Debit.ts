import { CardTypes } from "./CardTypes";
import ICard from "./ICard";

export default class Debit implements ICard {
  public readonly rate = 0.02;
  public readonly type = CardTypes.DEBIT;
  public number: number;

  constructor(number: number) {
    this.number = number;
  }
  payment(value: number): string {
    const finalValue = value + this.rate;
    return `Valor aprovado no débito: ${finalValue.toFixed(2)} cartão: ${
      this.number
    }`;
  }
}
