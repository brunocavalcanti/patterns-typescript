import Restaurant from "../../../src/patterns/adapter/Restaurant";
import MealTicket from "../../../src/patterns/adapter/MealTicket";
import MealTicketAdapter from "../../../src/patterns/adapter/MealTicketAdapter";
describe("Adapter Card", () => {
  it("Quando tipo de cartão for vale alimentação, deve conseguir pagar com adapter", () => {
    const card = new MealTicket(1234567);
    const cardAdapter = new MealTicketAdapter(card);
    const restaurant = new Restaurant("Restaurante da Rose");
    const ticket = restaurant.payment(cardAdapter);
    expect(ticket).toBe(
      "Valor aprovado no vale alimentação: 15.00 cartão: 1234567"
    );
  });
});
