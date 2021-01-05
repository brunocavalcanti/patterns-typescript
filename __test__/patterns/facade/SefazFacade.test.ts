import SefazFacade from "../../../src/patterns/facade/SefazFacade";
import Invoice from "../../../src/patterns/facade/Invoice";
import Soap from "../../../src/patterns/facade/Soap";

describe("Facade Sefaz", () => {
  it("Deve gerar um xml de nota com soap", () => {
    const invoice = new Invoice(1, new Date(2021, 1, 6));
    const soap = new Soap();
    const xml = new SefazFacade(invoice, soap).generateXmlFinal();
    expect(xml).toBe(
      '<?xml version="1.0"?><soap encodingStyle="http://www.w3.org/2003/05/soap-encoding"><soap:Body><value>1.00</value><date>2/6/2021</date></soap:Body></soap>'
    );
  });
});
