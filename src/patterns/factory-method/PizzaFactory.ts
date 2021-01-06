import Pepperoni from "./Pepperoni";
import Marguerita from "./Marguerita";
import Vegan from "./Vegan";
import IPizza from "./IPizza";
import { PizzaTypes } from "./PizzaTypes";

export default class PizzaFactory {
  public create(type: PizzaTypes): IPizza | null {
    switch (type) {
      case PizzaTypes.MARGUERITA:
        return new Marguerita([
          "Molho",
          "Mussarela de Búfala",
          "Parmesão",
          "Manjericão",
          "Azeite de Oliva",
        ]);
      case PizzaTypes.PEPPERONI:
        return new Pepperoni(["Molho", "Mussarela", "Pepperoni"]);
      case PizzaTypes.VEGAN:
        return new Vegan([
          "Molho",
          "Parmesão de Amêndoas",
          "Tomate",
          "Manjericão",
        ]);
      default:
        return null;
    }
  }
}
