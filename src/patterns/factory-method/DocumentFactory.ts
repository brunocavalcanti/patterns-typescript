import CNPJ from "./CNPJ";
import CPF from "./CPF";
import IDocument from "./IDocument";

export function createDocument(document: string): IDocument | null {
  switch (document.toLowerCase()) {
    case "cpf":
      return new CPF();
    case "cnpj":
      return new CNPJ();
    default:
      return null;
  }
}
