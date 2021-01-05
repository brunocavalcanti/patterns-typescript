export default class Soap {
  generateSoap(xml: string): string {
    return `<?xml version="1.0"?><soap encodingStyle="http://www.w3.org/2003/05/soap-encoding"><soap:Body>${xml}</soap:Body></soap>`;
  }
}
