import IDocument from "./IDocument";

export default class CNPJ implements IDocument {
  validate(document: string): boolean {
    return document.length === 14;
  }
}
