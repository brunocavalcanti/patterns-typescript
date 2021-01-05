import Invoice from "./Invoice";
import Soap from "./Soap";

export default class SefazFacade {
  private invoice: Invoice;
  private soap: Soap;
  constructor(invoice: Invoice, soap: Soap) {
    this.invoice = invoice;
    this.soap = soap;
  }
  generateXmlFinal(): string {
    const fieldValue = this.invoice.generateFieldValue();
    const fieldDate = this.invoice.generateFieldDate();
    const finalXml = this.soap.generateSoap(`${fieldValue}${fieldDate}`);
    return finalXml;
  }
}
