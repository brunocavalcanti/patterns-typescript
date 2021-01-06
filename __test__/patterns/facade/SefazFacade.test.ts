import SefazFacade from "../../../src/patterns/facade/SefazFacade";

describe("Facade Sefaz", () => {
  it("Deve gerar um xml de nota com soap", () => {
    const xml = new SefazFacade().generateXmlFinal();
    expect(xml).toBe(
      '<?xml version="1.0"?><soap encodingStyle="http://www.w3.org/2003/05/soap-encoding"><soap:Body><value>1.00</value><date>06/01/2021</date></soap:Body></soap>'
    );
  });
});
