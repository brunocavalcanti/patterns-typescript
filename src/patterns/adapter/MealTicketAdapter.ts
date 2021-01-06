import { CardTypes } from "./CardTypes";
import ICard from "./ICard";
import MealTicked from "./MealTicket";

export default class MealTicketAdapter implements ICard {
  public readonly rate = 0.5;
  public readonly type = CardTypes.MEAL_TICKET;
  public number = 0;
  private card: MealTicked;

  constructor(card: MealTicked) {
    this.card = card;
  }
  payment(value: number): string {
    this.number = this.card.Number;
    const finalValue = value + this.rate;
    return `Valor aprovado no vale alimentação: ${finalValue.toFixed(
      2
    )} cartão: ${this.number}`;
  }
}
