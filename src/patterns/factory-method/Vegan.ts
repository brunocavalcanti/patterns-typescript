import IPizza from "./IPizza";

export default class Vegan implements IPizza {
  public ingredients: Array<string>;

  constructor(ingredients: Array<string>) {
    this.ingredients = ingredients;
  }
  bake(): string {
    return this.ingredients.join("|");
  }
}
