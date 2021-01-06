import { CardTypes } from "./CardTypes";
import ICard from "./ICard";

export default class Credit implements ICard {
  public readonly rate = 0.05;
  public readonly type = CardTypes.CREDIT;

  public number: number;
  constructor(number: number) {
    this.number = number;
  }
  payment(value: number): string {
    const finalValue = value + this.rate;
    return `Valor aprovado no crédito: ${finalValue.toFixed(2)} cartão: ${
      this.number
    }`;
  }
}
