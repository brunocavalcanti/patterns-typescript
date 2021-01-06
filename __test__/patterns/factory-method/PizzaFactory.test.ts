import PizzaFactory from "../../../src/patterns/factory-method/PizzaFactory";
import { PizzaTypes } from "../../../src/patterns/factory-method/PizzaTypes";

const pizzaFactory = new PizzaFactory();

describe("Factory Method Pizza", () => {
  it("Deve assar uma pizza pepperoni", () => {
    const pizza = pizzaFactory.create(PizzaTypes.PEPPERONI)?.bake();
    expect(pizza).toBe("Molho|Mussarela|Pepperoni");
  });
  it("Deve assar uma pizza marguerita", () => {
    const pizza = pizzaFactory.create(PizzaTypes.MARGUERITA)?.bake();
    expect(pizza).toBe(
      "Molho|Mussarela de Búfala|Parmesão|Manjericão|Azeite de Oliva"
    );
  });
  it("Deve assar uma pizza vegana", () => {
    const pizza = pizzaFactory.create(PizzaTypes.VEGAN)?.bake();
    expect(pizza).toBe("Molho|Parmesão de Amêndoas|Tomate|Manjericão");
  });
});
