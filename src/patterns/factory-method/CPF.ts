import IDocument from "./IDocument";

export default class CPF implements IDocument {
  validate(document: string): boolean {
    return document.length === 11;
  }
}
