import IPizza from "./IPizza";

export default class Marguerita implements IPizza {
  public ingredients: Array<string>;

  constructor(ingredients: Array<string>) {
    this.ingredients = ingredients;
  }
  bake(): string {
    return this.ingredients.join("|");
  }
}
