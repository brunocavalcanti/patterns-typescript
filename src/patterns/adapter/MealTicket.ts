export default class MealTicked {
  public number: number;
  constructor(number: number) {
    this.number = number;
  }
  get Number(): number {
    return this.number;
  }
}
