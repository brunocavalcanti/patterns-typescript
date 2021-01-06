import Invoice from "./Invoice";
import Soap from "./Soap";

export default class SefazFacade {
  private invoice: Invoice;
  private soap: Soap;
  constructor() {
    this.invoice = new Invoice();
    this.soap = new Soap();
  }
  generateXmlFinal(): string {
    const invoiceXml = this.invoice.generateInvoice();
    const finalXml = this.soap.generateSoap(invoiceXml);
    return finalXml;
  }
}
