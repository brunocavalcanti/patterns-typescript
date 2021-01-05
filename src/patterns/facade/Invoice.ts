export default class Invoice {
  private value: number;
  private date: Date;

  constructor(value: number, date: Date) {
    this.value = value;
    this.date = date;
  }

  generateFieldValue(): string {
    return `<value>${this.value.toFixed(2)}</value>`;
  }
  generateFieldDate(): string {
    return `<date>${this.date.toLocaleDateString()}</date>`;
  }
}
